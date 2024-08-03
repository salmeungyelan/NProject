import { useState, useRef, useEffect } from 'react';

import usePathname from 'hooks/usePathname';
import useApi from 'hooks/useApi';

import * as S from './index.styles';

function MultiSelect(props) {
	const { selectedStatus, setSelectedStatus, updateQueryParams } = props;

	const { path } = usePathname();

	const checkBox = useRef(null);
	const [expanded, setExpanded] = useState(false);
	const [status, setStatus] = useState([]);

	const paths = path.toUpperCase().replace(/-/g, '_');

	const { result } = useApi({
		path: `/client/global-constants?typeValue=${paths}_STATUS`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setStatus(result.data.globalConstantList);
		}
	}, [result.data]);

	const showCheckboxes = () => {
		setExpanded(!expanded);
	};

	const handleChangeStatus = (label, value) => {
		let updatedStatus;

		const isSelected = selectedStatus.some(stat => stat.codeLabel === label);

		// '전체'가 선택되면 다른 모든 선택 해제하고 '전체'만 선택
		if (label === '전체') {
			updatedStatus = [{ codeLabel: '전체', sortBy: '' }];
			updateQueryParams({ status: '' });
			setSelectedStatus(updatedStatus);
			return setExpanded(false);
		}

		if (isSelected) {
			updatedStatus = selectedStatus.filter(stat => stat.codeLabel !== label); // 이미 선택된 상태를 해제
		} else {
			updatedStatus = selectedStatus.filter(stat => stat.codeLabel !== '전체');
			updatedStatus = [...updatedStatus, { codeLabel: label, sortBy: value }];

			// 4개가 선택되면 '전체'로 설정
			if (updatedStatus.length === status.length) {
				updatedStatus = [{ codeLabel: '전체', sortBy: '' }];
				updateQueryParams({ status: '' });
			}
		}

		if (updatedStatus.length === 0) {
			updatedStatus = [{ codeLabel: '전체', sortBy: '' }];
			updateQueryParams({ status: '' });
		}

		if (path === 'review') {
			updateQueryParams({
				status: updatedStatus.map(stat => stat.sortBy).join(','),
			});
		}

		setSelectedStatus(updatedStatus);
	};

	const isStatusSelected = label => {
		return selectedStatus.some(stat => stat.codeLabel === label);
	};

	const length =
		selectedStatus.length === 1 ? '' : `외 ${selectedStatus.length - 1}개`;

	return (
		<S.MultiselectContainer>
			<S.SelectStyled onClick={showCheckboxes} $expanded={expanded}>
				{selectedStatus[0].codeLabel === '전체'
					? '전체'
					: `${selectedStatus[0].codeLabel} ${length}`}
				<S.DropdownArrow>
					<img src={`/assets/icons/${expanded ? `up.svg` : `down.svg`}`} />
				</S.DropdownArrow>
			</S.SelectStyled>

			<S.CheckBoxContainer ref={checkBox} $expanded={expanded}>
				<S.Label>
					<input
						id="all"
						type="checkbox"
						checked={isStatusSelected('전체')}
						onChange={() => handleChangeStatus('전체')}
					/>
					<label htmlFor="all" />
					<span>전체</span>
				</S.Label>

				{status &&
					status.map(stat => (
						<S.Label key={stat.id}>
							<input
								id={stat.codeValue}
								type="checkbox"
								checked={isStatusSelected(stat.codeLabel)}
								onChange={() =>
									handleChangeStatus(stat.codeLabel, stat.codeValue)
								}
							/>
							<label htmlFor={stat.codeValue} />
							<span>{stat.codeLabel}</span>
						</S.Label>
					))}
			</S.CheckBoxContainer>
		</S.MultiselectContainer>
	);
}

export default MultiSelect;
