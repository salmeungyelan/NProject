import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import useInput from 'hooks/useInput';
import usePagination from 'hooks/usePagination';
import { REVIEW_STATUS } from 'constants/status';
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

	// 리뷰 리스트 및 각종 필터, status
	const [reviewList, setReviewList] = useState([]);
	const [globalConstants, setGlobalConstants] = useState([]);
	const [shouldFetchList, setShouldFetchList] = useState(false);

	const location = useLocation();
	const navigate = useNavigate();

	// 쿼리스트링에서 상태를 가져오는 함수
	const getQueryParams = () => {
		const params = new URLSearchParams(location.search);

		const statusParam = params.get('status')
			? params.get('status').split(',')
			: null;

		const additionalStatuses = statusParam
			? statusParam.map(param =>
					REVIEW_STATUS.find(status => status.sortBy === param),
			  )
			: [{ codeLabel: '전체', sortBy: '' }];

		return {
			inputData: params.get('title') || '',
			currentPage: parseInt(params.get('page'), 10) || 1,
			category: params.get('category') || '',
			status: additionalStatuses,
			optionCode: params.get('optionCode') || '최신순',
			sortBy: params.get('sortBy') || 'REVIEW_FILTER_01',
		};
	};

	const params = getQueryParams();

	// 선택된 카테고리, 상태, 옵션
	const [selectedCategory, setSelectedCategory] = useState(params.category);
	const [selectedStatus, setSelectedStatus] = useState(params.status);
	const [selectedOption, setSelectedOption] = useState({
		codeLabel: params.optionCode,
		sortBy: params.sortBy,
	});

	// 한 번에 보여줄 아이템 수
	const calcItemsPerPage = () => {
		if (window.innerWidth >= 768 && window.innerWidth < 1200) return 9;
		else return 10;
	};

	const [itemsPerPage, setItemsPerPage] = useState(calcItemsPerPage);
	const { currentPage, setCurrentPage, total, setTotal } = usePagination();

	// 화면 사이즈 변경에 따른 보여질 갯수 변경
	useEffect(() => {
		const handleResize = () => {
			setItemsPerPage(calcItemsPerPage);
		};

		handleResize();
		window.addEventListener('resize', handleResize);
	}, [itemsPerPage]);

	// api path
	const basePath = `/client/reviews?size=${itemsPerPage}&page=${currentPage}`;
	const category = selectedCategory && `&type=${selectedCategory}`;
	const option = `&sortBy=${selectedOption.sortBy}`;
	const searchData = `&title=${inputData}&requirement=${inputData}`;

	const status =
		selectedStatus[0].sortBy &&
		selectedStatus.map(stat => `&status=${stat.sortBy}`).join('');

	const fullPath = basePath + category + option + searchData + status;

	const { result, trigger } = useApi({
		path: fullPath,
		shouldFetch: false,
	});

	useEffect(() => {
		setSelectedCategory(params.category);
		setSelectedOption({
			codeLabel: params.optionCode,
			sortBy: params.sortBy,
		});
		setSelectedStatus(params.status);
		setInputData(params.inputData);
		setCurrentPage(params.currentPage);
		setShouldFetchList(prev => !prev);
	}, [location.search]);

	// 카테고리 / 옵션 / 상태만 변화했을 때 api 호출
	useEffect(() => {
		trigger({ path: fullPath, applyResult: true });
	}, [shouldFetchList]);

	useEffect(() => {
		if (result.data) {
			setReviewList(result.data.reviews);
			setTotal(result.data.total);
			setGlobalConstants(result.data.reviewConstant);
		}
	}, [result.data]);

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

	// 검색
	const handleClickSearch = async () => {
		setCurrentPage(1);
		updateQueryParams({ page: 1, title: inputData, requirement: inputData });

		// await trigger({ path: fullPath, applyResult: true });
	};

	// 검색 초기화
	const handleReset = async () => {
		setCurrentPage(1);
		setInputData('');
		updateQueryParams({
			page: 1,
			title: '',
			requirement: '',
			status: '',
			optionCode: '',
			sortBy: '',
			category: '',
		});
		// await trigger({ path: basePath, applyResult: true });
	};

	// 신청 페이지 이동
	const handleClickApply = () => {
		navigate(LINK.REVIEW_APPLY);
	};

	// 페이지 이동
	const handlePageChange = async page => {
		setCurrentPage(page);
		updateQueryParams({ page });
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
								categories={globalConstants.type}
								selectedCategory={selectedCategory}
								setSelectedCategory={setSelectedCategory}
								updateQueryParams={updateQueryParams}
							/>

							<S.MultiSelect>
								<MultiSelect
									status={globalConstants.status}
									selectedStatus={selectedStatus}
									setSelectedStatus={setSelectedStatus}
									updateQueryParams={updateQueryParams}
								/>
								<DropDown
									option={globalConstants.filter}
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
