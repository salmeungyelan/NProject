import { useMemo, useState } from 'react';

import usePathname from 'hooks/usePathname';

import * as S from './index.styles';

import Filter from 'components/@common/Filter';
import MultiSelect from 'components/@common/MultiSelect';
import Progress from 'components/@common/Progress';
import Incomplete from './Incomplete';
import ProgressStatus from './ProgressStatus';
import NoPost from 'components/@common/NoPost';
import { useNavigate } from 'react-router-dom';

function OtherList(props) {
	const {
		title,
		otherList,
		filter,
		status,
		selectedStatus,
		setSelectedStatus,
		sort,
		onSelect,
		listTrigger,
	} = props;

	const { path } = usePathname();
	const navigate = useNavigate();

	const [display, setDisplay] = useState(null);

	const handleClickDown = index => {
		setDisplay(prev => (prev === index ? null : index));
	};

	const histories = useMemo(() => {
		return (
			path
				.split('-')
				.map((word, index) =>
					index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
				)
				.join('') + 'Histories'
		);
	}, [path]);

	const updateQueryParams = newParams => {
		const params = new URLSearchParams(location.search);

		Object.keys(newParams).forEach(key => {
			if (newParams[key] !== undefined && newParams[key] !== null) {
				if (newParams[key] === '') {
					params.delete(key); // 빈 문자열인 경우 쿼리스트링에서 삭제
				} else {
					params.set(key, newParams[key]);
				}
			} else {
				params.delete(key); // null 또는 undefined인 경우 쿼리스트링에서 삭제
			}
		});
		navigate(`?${params.toString()}`, { replace: true });
	};

	return (
		<S.Body>
			<S.FilterBox>
				<Filter filter={filter} sort={sort} onClick={onSelect} />
				<MultiSelect
					status={status}
					selectedStatus={selectedStatus}
					setSelectedStatus={setSelectedStatus}
					updateQueryParams={updateQueryParams}
				/>
			</S.FilterBox>

			<S.ListBox $list={otherList?.length}>
				{otherList?.length ? (
					otherList.map(list => (
						<div key={list.id}>
							<S.List onClick={() => handleClickDown(list.id)}>
								<div>
									<Progress variant={list.status}>{list.statusLabel}</Progress>
									<S.CoName>{list.companyName}</S.CoName>
								</div>
								<S.Date>
									{list.picName || '지정된 담당자 없음'} | {list.createdAt}
								</S.Date>
								<S.DownBtn src="/assets/icons/down.svg" />
							</S.List>

							{['취소', '임시저장'].includes(list.statusLabel) &&
								display === list.id && (
									<Incomplete
										id={list.id}
										title={title}
										statusLabel={list.statusLabel}
										listTrigger={listTrigger}
									/>
								)}

							{!['취소', '임시저장'].includes(list.statusLabel) &&
								display === list.id && (
									<ProgressStatus
										id={list.id}
										title={title}
										history={list[histories]}
										progress={list.statusLabel}
									/>
								)}
						</div>
					))
				) : (
					<NoPost>신청한 내역이 없습니다.</NoPost>
				)}
			</S.ListBox>
		</S.Body>
	);
}

export default OtherList;
