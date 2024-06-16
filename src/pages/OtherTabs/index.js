import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import useModal from 'hooks/useModal';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import Button from 'components/@common/Button';
import InfoModal from 'components/pages/OtherTabs/InfoModal';
import RequestModal from 'components/pages/OtherTabs/RequestModal';
import OtherList from 'components/pages/OtherTabs/OtherList';

const titles = [
	{
		link: 'review_team',
		en_title: 'REVIEW TEAM',
		ko_title: '체험단',
		children: '체험단을 신청할 수 있습니다.',
	},
	{
		link: 'view_instagram',
		en_title: 'VIEWTAB & INSTA',
		ko_title: '뷰탭&인스타',
		children: '뷰탭&인스타를 신청할 수 있습니다.',
	},
	{
		link: 'web_creation',
		en_title: 'WEBSITE CREATION',
		ko_title: '홈페이지 제작',
		children: '홈페이지 제작을 신청할 수 있습니다.',
	},
];

function OtherTabs() {
	const { pathname } = useLocation();
	const link = pathname.split('/')[1];

	const mainTitle = titles.filter(el => link === el.link)[0];

	const { openModal } = useModal();
	const [suggestBtn, setSuggestBtn] = useState(false);
	const [nextStep, setNextStep] = useState(true);

	const handleOpenModal = () => {
		openModal({
			img: '',
			title: `${mainTitle.ko_title} 신청`,
			content: '',
			callback: () => console.log('closed'),
		});
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
			{nextStep ? (
				<InfoModal onNext={handleNext} />
			) : (
				<RequestModal onPrev={handleNext} />
			)}

			<Title title={mainTitle.en_title}>{mainTitle.children}</Title>

			{suggestBtn ? (
				<S.Content>
					<span>제안서</span>
				</S.Content>
			) : (
				<OtherList />
			)}

			<S.ButtonBox>
				<Button
					variant={'default'}
					size={'height'}
					onClick={handleSuggestBtn}
					// onClick={suggestBtn && handleOpenModal}
				>
					{mainTitle.ko_title} 신청하기
				</Button>
			</S.ButtonBox>

			{/* 페이지네이션 */}
			<div></div>
		</S.Body>
	);
}

export default OtherTabs;
