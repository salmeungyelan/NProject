import { useState } from 'react';

import usePathname from 'hooks/usePathname';
import useModal from 'hooks/useModal';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import InfoModal from 'components/pages/OtherTabs/InfoModal';
import RequestModal from 'components/pages/OtherTabs/RequestModal';
import OtherList from 'components/pages/OtherTabs/OtherList';

const url = [
	{
		link: 'visit_experience',
		enTitle: 'REVIEW TEAM',
		koTitle: '체험단',
		children: '체험단을 신청할 수 있습니다.',
	},
	{
		link: 'viewtab_instagram',
		enTitle: 'VIEWTAB & INSTA',
		koTitle: '뷰탭&인스타',
		children: '뷰탭&인스타를 신청할 수 있습니다.',
	},
	{
		link: 'website_outsourcing',
		enTitle: 'WEBSITE CREATION',
		koTitle: '홈페이지 제작',
		children: '홈페이지 제작을 신청할 수 있습니다.',
	},
];

function OtherTabs() {
	const { path } = usePathname();
	const mainTitle = url.filter(el => path === el.link)[0];

	const { modalState, openModal } = useModal();
	const [suggestBtn, setSuggestBtn] = useState(false);
	const [nextStep, setNextStep] = useState(true);

	const handleOpenModal = () => {
		openModal();
		setNextStep(true);
	};

	const handleNext = () => {
		setNextStep(prev => !prev);
	};

	const handleSuggestBtn = () => {
		setSuggestBtn(prev => !prev);
	};

	// 리스트가 있을 경우 1. 신청하기 버튼 click 2. 제안서 보기 3. 신청하기 버튼 -> 모달
	// 리스트 없는 경우 1. 제안서 보기 2. 신청하기 버튼 -> 모달

	return (
		<S.Body>
			{modalState &&
				(nextStep ? (
					<InfoModal onNext={handleNext} title={mainTitle.koTitle} />
				) : (
					<RequestModal onPrev={handleNext} title={mainTitle.koTitle} />
				))}

			<Title title={mainTitle.enTitle}>{mainTitle.children}</Title>

			{suggestBtn ? (
				<S.Content>
					<span>제안서</span>
				</S.Content>
			) : (
				<OtherList />
			)}

			{/* 페이지네이션 */}
			<div></div>
		</S.Body>
	);
}

export default OtherTabs;
