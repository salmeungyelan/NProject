import { useEffect, useMemo, useState } from 'react';

import LINK from 'constants/link';
import usePathname from 'hooks/usePathname';
import useFilter from 'hooks/useFilter';
import useModal from 'hooks/useModal';
import useApi from 'hooks/useApi';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import OtherList from 'components/pages/OtherTabs/OtherList';
import ApplicationModal from 'components/pages/OtherTabs/ApplicationModal';
import Button from 'components/@common/Button';

const url = [
	{
		link: LINK.TEAM,
		koTitle: '체험단',
		enTitle: 'REVIEW TEAM',
		children: '체험단을 신청할 수 있습니다.',
	},
	{
		link: LINK.VIEW,
		koTitle: '뷰탭&인스타',
		enTitle: 'VIEWTAB & INSTA',
		children: '뷰탭&인스타를 신청할 수 있습니다.',
	},
	{
		link: LINK.DEVELOP,
		koTitle: '홈페이지 제작',
		enTitle: 'WEBSITE CREATION',
		children: '홈페이지 제작을 신청할 수 있습니다.',
	},
];

function OtherTabs() {
	const { path, pathname } = usePathname();
	const mainTitle = url.filter(el => pathname === el.link)[0];

	const { sort, handelSelectFilter } = useFilter();
	const { modalState, openModal, closeModal } = useModal();

	const [otherList, setOtherList] = useState([]);
	const [checkHistory, setCheckHistory] = useState(false);

	const [selectedStatus, setSelectedStatus] = useState([
		{
			codeLabel: '전체',
			sortBy: '',
		},
	]);

	const apiPath = `/client/${path}s?page=1&size=7&sortBy=${sort}`;

	const { result, trigger } = useApi({
		path: apiPath,
		shouldFetch: true,
	});

	// visitExperiences, viewtabInstagrams, websiteOutsourcings
	const camelCasePath = useMemo(() => {
		return (
			path
				.split('-')
				.map((word, index) =>
					index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
				)
				.join('') + 's'
		);
	}, [path]);

	useEffect(() => {
		if (result.data) {
			const resultData = result.data[camelCasePath];
			setOtherList(resultData);
		}
	}, [result.data, camelCasePath]);

	useEffect(() => {
		setCheckHistory(false);

		trigger({
			applyResult: true,
		});
	}, [path, sort]);

	const status =
		selectedStatus[0].sortBy &&
		selectedStatus.map(stat => `&status=${stat.sortBy}`).join('');

	const fetchData = async () => {
		try {
			const req = await trigger({
				path: apiPath + status,
				applyResult: true,
			});

			if (req.data) {
				setOtherList(req.data[camelCasePath]);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, [selectedStatus, sort]);

	// 제안서 & 리스트
	const handleSuggestBtn = () => {
		setCheckHistory(prev => !prev);
	};

	// 신청 모달 띄우기
	const handleOpenModal = () => {
		openModal();
	};

	return (
		<>
			{modalState && (
				<ApplicationModal onClose={closeModal} title={mainTitle.koTitle} />
			)}

			<S.Body>
				<Title title={mainTitle.enTitle}>{mainTitle.children}</Title>

				{/* 첫 렌더링 시 */}
				{!checkHistory && (
					<S.Content>
						<span>제안서</span>
					</S.Content>
				)}

				{checkHistory && (
					<OtherList
						title={mainTitle.koTitle}
						otherList={otherList}
						selectedStatus={selectedStatus}
						setSelectedStatus={setSelectedStatus}
						sort={sort}
						onSelect={handelSelectFilter}
					/>
				)}

				{/* 페이지네이션 */}
				<div></div>
			</S.Body>
			<S.ApplyBtnBox>
				<div>
					<Button size="height" variant="white" onClick={handleSuggestBtn}>
						{checkHistory ? '제안서 보기' : '이용 내역 확인'}
					</Button>
					<Button size="height" variant="default" onClick={handleOpenModal}>
						{mainTitle.koTitle} 신청하기
					</Button>
				</div>
			</S.ApplyBtnBox>
		</>
	);
}

export default OtherTabs;
