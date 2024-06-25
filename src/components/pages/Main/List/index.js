import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import LINK from 'constants/link';
import useApi from 'hooks/useApi';

import * as S from './index.styles';

import Card from 'components/@common/Card';
import Button from 'components/@common/Button';
import Iphone from '../Iphone';

const source = [
	{
		id: 1,
		progress: 'ing',
		ko_pro: '진행중',
		writer: '황올컴퍼니',
		title: '불닭볶음면',
		previewImg: '/assets/images/example.png',
	},
	{
		id: 2,
		progress: 'ing',
		ko_pro: '진행중',
		writer: '아연 조',
		title: '완전 맛있음',
		previewImg: '/assets/images/example.png',
	},
	{
		id: 3,
		progress: 'wait',
		writer: '원소기호 zn',
		ko_pro: '대기',
		title: '불닭게티도',
		previewImg: '',
	},
	{
		id: 4,
		progress: 'tempSave',
		writer: '자바스크립트',
		ko_pro: '임시저장',
		title: '먹고 싶은데 해조 최은췍',
		previewImg: '',
	},
	{
		id: 5,
		progress: 'ing',
		writer: '타입스크립트',
		ko_pro: '진행중',
		title: '내 피부 어쩔',
		previewImg: '/assets/images/example.png',
	},
	{
		id: 6,
		progress: 'ing',
		writer: '리액트',
		ko_pro: '진행중',
		title: '그리고 왜 이렇게 어려움?',
		previewImg: '',
	},
	{
		id: 7,
		progress: 'ing',
		writer: '열라면',
		ko_pro: '진행중',
		title: '진짜 너무너무너무너무 어려움',
		previewImg: '/assets/images/example.png',
	},
	{
		id: 8,
		progress: 'ing',
		writer: '불닭볶음면',
		ko_pro: '진행중',
		title: '그만하고싶다티비데스',
		previewImg: '',
	},
];

const finSource = [
	{
		id: 1,
		progress: 'fin',
		ko_pro: '완료',
		writer: '채로로',
		title: '리뷰 왜 안 돼',
		previewImg: '/assets/images/example.png',
		rate: 4,
	},
	{
		id: 2,
		progress: 'fin',
		ko_pro: '완료',
		writer: '디올',
		title: '리뷰 빨리...',
		previewImg: '/assets/images/example.png',
		rate: 3,
	},
	{
		id: 3,
		progress: 'fin',
		writer: '황도',
		ko_pro: '완료',
		title: '피노키오 보려면 왓챠 결제해야 되네',
		previewImg: '/assets/images/example.png',
		rate: 5,
	},
	{
		id: 4,
		progress: 'fin',
		writer: '메이',
		ko_pro: '완료',
		title: '돈이 없다',
		previewImg: '/assets/images/example.png',
		rate: 1,
	},
	{
		id: 5,
		progress: 'fin',
		writer: 'zn',
		ko_pro: '완료',
		title: '메인도아직안끝난거실화냐?',
		previewImg: '/assets/images/example.png',
		rate: 0,
	},
	{
		id: 6,
		progress: 'fin',
		writer: '드디어?',
		ko_pro: '완료',
		title: '슬라이더 됐나?',
		previewImg: '/assets/images/example.png',
		rate: 2,
	},
];

function List() {
	// 현재 진행 중인 리뷰
	const [currentData, setCurrentData] = useState([]);

	// 진행 중인 리뷰 현재 인덱스 상태 추가
	const [currentIndex, setCurrentIndex] = useState(0);

	// const { result: curResult } = useApi({
	// 	path: '/reviews',
	// 	shouldFetch: true,
	// });

	// 완료된 리뷰
	const [completedData, setCompletedData] = useState([]);

	// 완료된 리뷰 현재 인덱스 상태 추가
	const [completedIndex, setCompletedIndex] = useState(0);

	// const { result:comResult } = useApi({
	// 	path: '/reviews',
	// 	shouldFetch: true,
	// });

	// 슬라이더 부분 못한 부분
	// 1. 애니메이션 넣는 부분

	// 현재 데이터 있고, 완료된 데이터 있거나 없거나, 태블릿 사이즈일 때 itemsPerPage 2
	// 현재 데이터 있고, 완료된 데이터 있거나 없거나, 데스크탑 사이즈일 때 itemsPerPage 4
	// 현재 데이터 없고, 태블릿 사이즈일 때 itemsPerPage가 3
	// 현재 데이터 없고, 데스크탑 사이즈일 때 itemsPerPage가 5
	const calculateItemsPerPage = () => {
		if (currentData.length > 0 && window.innerWidth >= 1200) return 4;
		else if (currentData.length > 0 && window.innerWidth >= 768) return 2;
		else if (!currentData.length && window.innerWidth >= 1200) return 5;
		else if (!currentData.length && window.innerWidth >= 768) return 3;
		else return 2;
	};

	// 한 번에 보여줄 아이템 수
	const [itemsPerPage, setItemsPerPage] = useState(calculateItemsPerPage);

	useEffect(() => {
		const handleResize = () => {
			setItemsPerPage(calculateItemsPerPage);
		};

		handleResize();
		window.addEventListener('resize', handleResize);
	}, [currentData]);

	useEffect(() => {
		// if (curResult.data) {
		// setCurrentData(curResult.data.reviews);
		// }

		// if (comResult.data) {
		// setCompletedData(comResult.data.reviews);
		// }

		setCurrentData(source);
		setCompletedData(finSource);
	}, [currentData]);

	const handleSlider = (type, button) => {
		const left = button === 'left';
		const current = type === 'current';

		const calculateNewIndex = (prevIndex, dataLength) => {
			const newIndex = prevIndex + (left ? -1 : 1);

			return newIndex < 0
				? Math.ceil(dataLength / itemsPerPage) - 1
				: newIndex >= Math.ceil(dataLength / itemsPerPage)
				? 0
				: newIndex;
		};

		if (current) {
			setCurrentIndex(prevIndex =>
				calculateNewIndex(prevIndex, currentData.length),
			);
		} else {
			setCompletedIndex(prevIndex =>
				calculateNewIndex(prevIndex, completedData.length),
			);
		}
	};

	const getCurrentItems = (data, index) => {
		const start = index * itemsPerPage;
		const end = start + itemsPerPage;

		// 데이터 개수가 8 이하일 때의 특별한 경우 처리
		if (
			data.length <= 8 &&
			index === Math.ceil(data.length / itemsPerPage) - 1
		) {
			const itemsToAdd = itemsPerPage - (data.length - start);
			return [...data.slice(0, itemsToAdd), ...data.slice(start)];
		}

		return data.slice(start, end);
	};

	return (
		<S.Body $data={currentData}>
			{currentData.length ? <Iphone /> : <></>}

			<S.ReviewIng>
				<S.Title>
					<Link to={LINK.REVIEW}>
						<span>현재 진행 중인 리뷰 보러 가기</span>
						<img src="/assets/icons/pagination-right.svg" />
					</Link>
				</S.Title>

				{currentData.length ? (
					<>
						<S.CardList>
							{getCurrentItems(currentData, currentIndex).map((data, idx) => (
								<Card key={idx} data={data} />
							))}
						</S.CardList>

						{currentIndex !== 0 && (
							<S.LeftArrowImg onClick={() => handleSlider('current', 'left')} />
						)}
						<S.RightArrowImg onClick={() => handleSlider('current', 'right')} />
					</>
				) : (
					<S.NoPost>
						<span>등록된 게시글이 없습니다.</span>
						<Button variant="default" size="height">
							등록하러 가기
						</Button>
					</S.NoPost>
				)}
			</S.ReviewIng>

			<S.ReviewFin>
				<S.Title>
					<Link to={LINK.REVIEW}>
						<span>완료된 리뷰 보러 가기</span>
						<img src="/assets/icons/pagination-right.svg" />
					</Link>
				</S.Title>

				{completedData.length ? (
					<>
						<S.CardList>
							{getCurrentItems(completedData, completedIndex).map(
								(data, idx) => (
									<Card key={idx} data={data} />
								),
							)}
						</S.CardList>

						{completedIndex !== 0 && (
							<S.LeftArrowImg
								$currentData={currentData.length}
								onClick={() => handleSlider('completed', 'left')}
							/>
						)}
						<S.RightArrowImg
							$currentData={currentData.length}
							onClick={() => handleSlider('completed', 'right')}
						/>
					</>
				) : (
					<S.NoPost>
						<span>등록된 게시글이 없습니다.</span>
						<Button variant="default" size="height">
							등록하러 가기
						</Button>
					</S.NoPost>
				)}
			</S.ReviewFin>
		</S.Body>
	);
}

export default List;
