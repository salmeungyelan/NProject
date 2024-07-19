import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useInput from 'hooks/useInput';
import usePagination from 'hooks/usePagination';
import useApi from 'hooks/useApi';
import LINK from 'constants/link';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import Search from 'components/@common/Search';
import Category from 'components/pages/Review/Category';
import MultiSelect from 'components/@common/MultiSelect';
import DropDown from 'components/pages/Review/DropDown';
import Card from 'components/@common/Card';
import NoPost from 'components/@common/NoPost';
import Button from 'components/@common/Button';
import Pagination from 'components/@common/Pagination';

function Review() {
	const { inputData, setInputData, handleChangeSearch } = useInput();

	const navigate = useNavigate();

	const [reviewList, setReviewList] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('');
	const [selectedStatus, setSelectedStatus] = useState([
		{
			codeLabel: '전체',
			sortBy: '',
		},
	]);
	const [selectedOption, setSelectedOption] = useState({
		codeLabel: '최신순',
		sortBy: 'REVIEW_FILTER_01',
	});

	const calcItemsPerPage = () => {
		if (window.innerWidth >= 768 && window.innerWidth < 1200) return 9;
		else return 10;
	};

	// 한 번에 보여줄 아이템 수
	const [itemsPerPage, setItemsPerPage] = useState(calcItemsPerPage);

	// 화면 사이즈 변경에 따른 보여질 갯수 변경
	useEffect(() => {
		const handleResize = () => {
			setItemsPerPage(calcItemsPerPage);
		};

		handleResize();
		window.addEventListener('resize', handleResize);
	}, [itemsPerPage]);

	const { currentPage, setCurrentPage, total, setTotal } = usePagination();

	const basePath = `/client/reviews?size=${itemsPerPage}&page=${currentPage}`;
	const category = selectedCategory && `&type=${selectedCategory}`;
	const option = `&sortBy=${selectedOption.sortBy}`;
	const searchData = `&title=${inputData}&requirement=${inputData}`;

	const status =
		selectedStatus[0].sortBy &&
		selectedStatus.map(stat => `&status=${stat.sortBy}`).join('');

	const fullPath = basePath + category + option + searchData + status;

	const { result, trigger } = useApi({
		path: basePath,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setReviewList(result.data.reviews);
			setTotal(result.data.total);
		}
	}, [result.data]);

	// 카테고리 / 옵션 / 상태만 변화했을 때 api 호출
	useEffect(() => {
		trigger({ path: fullPath, applyResult: true });
	}, [
		selectedCategory,
		selectedOption,
		selectedStatus,
		currentPage,
		itemsPerPage,
	]);

	useEffect(() => {
		setCurrentPage(1);
	}, [selectedCategory, selectedStatus]);

	// 검색
	const handleClickSearch = async () => {
		setCurrentPage(1);
		await trigger({ path: fullPath, applyResult: true });
	};

	// 검색 초기화
	const handleReset = async () => {
		setCurrentPage(1);
		setInputData('');

		await trigger({
			path: basePath + category + option + status,
			applyResult: true,
		});
	};

	// 신청 페이지 이동
	const handleClickApply = () => {
		navigate(LINK.REVIEW_APPLY);
	};

	// 페이지 이동
	const handlePageChange = async page => {
		await trigger({ applyResult: true });
		setCurrentPage(page);
	};

	return (
		<>
			<S.Body>
				<Title title="REVIEW LIST">
					자사 영업일 기준, 하루 한 번 신청 가능합니다.
				</Title>

				<S.MainBox>
					<Search
						search={inputData}
						onChange={handleChangeSearch}
						onClick={handleClickSearch}
						reset={handleReset}
					/>

					<S.Main>
						<S.SelectBox>
							<Category
								selectedCategory={selectedCategory}
								setSelectedCategory={setSelectedCategory}
							/>

							<S.MultiSelect>
								<MultiSelect
									selectedStatus={selectedStatus}
									setSelectedStatus={setSelectedStatus}
								/>
								<DropDown
									selectedOption={selectedOption}
									setSelectedOption={setSelectedOption}
								/>
							</S.MultiSelect>
						</S.SelectBox>

						{Array.isArray(reviewList) && reviewList.length ? (
							<S.CardBox>
								{reviewList.map((el, idx) => (
									<Card data={el} key={idx} />
								))}
							</S.CardBox>
						) : (
							<NoPost review={!inputData}>
								{inputData
									? '해당하는 게시글이 없습니다.'
									: '등록된 게시글이 없습니다.'}
							</NoPost>
						)}
					</S.Main>
				</S.MainBox>

				{/* 페이지네이션 */}
				{reviewList?.length ? (
					<Pagination
						totalItems={total}
						itemsPerPage={itemsPerPage}
						currentPage={currentPage}
						onPageChange={handlePageChange}
					/>
				) : (
					<></>
				)}
			</S.Body>

			<S.ApplyBtnBox>
				<Button size="height" variant="default" onClick={handleClickApply}>
					리뷰 신청하기
				</Button>
			</S.ApplyBtnBox>
		</>
	);
}

export default Review;

// const path = `/client/reviews?size=${itemsPerPage}&page=${currentPage}`;
// const category = selectedCategory && `&type=${selectedCategory}`;
// const option = `&sortBy=${selectedOption.sortBy}`;
// const status =
// 	selectedStatus[0].sortBy &&
// 	selectedStatus.map(stat => `&status=${stat.sortBy}`).join('');
// const searchData = `&title=${inputData}&requirement=${inputData}`;
