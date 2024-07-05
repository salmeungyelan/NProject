import { useMemo, useState } from 'react';

import usePathname from 'hooks/usePathname';

import * as S from './index.styles';

import Filter from 'components/@common/Filter';
import MultiSelect from 'components/@common/MultiSelect';
import Progress from 'components/@common/Progress';
import Incomplete from './Incomplete';
import ProgressStatus from './ProgressStatus';
import NoPost from 'components/@common/NoPost';

function OtherList(props) {
	const {
		title,
		otherList,
		selectedStatus,
		setSelectedStatus,
		sort,
		onSelect,
	} = props;

	const { path } = usePathname();

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

	return (
		<S.Body>
			<S.FilterBox>
				<Filter sort={sort} onClick={onSelect} />
				<MultiSelect
					selectedStatus={selectedStatus}
					setSelectedStatus={setSelectedStatus}
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
