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
		selectedStatus,
		setSelectedStatus,
		sort,
		onSelect,
		listTrigger,
	} = props;

	const { path } = usePathname();

	const [display, setDisplay] = useState(null);

	// 쿼리스트링에서 상태를 가져오는 함수
	const getQueryParams = () => {
		const params = new URLSearchParams(location.search);
		return {
			sort: params.get('sort'),
			status: params.get('status')
				? params.get('status').split(',')
				: [{ sortBy: '' }],
		};
	};
	const params = getQueryParams();

	const [statusSortBy, setStatusSortBy] = useState(params.status);

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

	const navigate = useNavigate();

	// 상태를 쿼리스트링에 반영하는 함수
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
				<Filter sort={sort} onClick={onSelect} />
				<MultiSelect
					selectedStatus={selectedStatus}
					setSelectedStatus={setSelectedStatus}
					statusSortBy={statusSortBy}
					setStatusSortBy={setStatusSortBy}
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
									{list.picName && `${list.picName}ㅣ`}
									{list.createdAt}
								</S.Date>
								<S.DownBtn src="/assets/icons/down.svg" />
							</S.List>

							{(list.statusLabel === '취소' ||
								list.statusLabel === '임시저장') &&
								display === list.id && (
									<Incomplete
										id={list.id}
										title={title}
										statusLabel={list.statusLabel}
										listTrigger={listTrigger}
									/>
								)}

							{!(
								list.statusLabel === '취소' || list.statusLabel === '임시저장'
							) &&
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
