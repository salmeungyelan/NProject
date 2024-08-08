import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import useFilter from 'hooks/useFilter';
import useInput from 'hooks/useInput';
import usePagination from 'hooks/usePagination';
import useApi from 'hooks/useApi';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import Search from 'components/@common/Search';
import Filter from 'components/@common/Filter';
import GuideList from 'components/pages/Guide/GuideList';
import NoPost from 'components/@common/NoPost';
import Pagination from 'components/@common/Pagination';

function Guide() {
	const { sort, setSort, handelSelectFilter } = useFilter();
	const { inputData, setInputData, handleChangeSearch } = useInput();

	const [guideList, setGuideList] = useState([]);

	const itemsPerPage = 8;
	const { currentPage, setCurrentPage, total, setTotal } = usePagination();

	const location = useLocation();
	const navigate = useNavigate();

	const basePath = `/client/guides?size=${itemsPerPage}&page=${currentPage}&sortBy=${sort}`;
	const fullPath = basePath + `&title=${inputData}&content=${inputData}`;

	const { result, trigger } = useApi({
		path: fullPath,
		shouldFetch: true,
	});

	// 쿼리스트링에서 상태를 가져오는 함수
	const getQueryParams = () => {
		const params = new URLSearchParams(location.search);
		return {
			sort: params.get('sort') || sort,
			inputData: params.get('title') || '',
			currentPage: parseInt(params.get('page'), 10) || 1,
		};
	};

	useEffect(() => {
		const params = getQueryParams();
		setSort(params.sort);
		setInputData(params.inputData);
		setCurrentPage(params.currentPage);
	}, [location.search]);

	useEffect(() => {
		trigger({ path: fullPath, applyResult: true });
	}, [sort, currentPage]);

	useEffect(() => {
		if (result.data) {
			setGuideList(result.data.guideList);
			setTotal(result.data.total);
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
		updateQueryParams({ page: 1, title: inputData, content: inputData });
		await trigger({ path: fullPath, applyResult: true });
	};

	// 검색 초기화
	const handleClickReset = async () => {
		setCurrentPage(1);
		setInputData('');
		updateQueryParams({
			page: 1,
			title: '',
			content: '',
			sort: 'GUIDE_FILTER_01',
		});
		await trigger({ path: basePath, applyResult: true });
	};

	// 페이지 이동
	const handlePageChange = async pageNumber => {
		setCurrentPage(pageNumber);
		updateQueryParams({ page: pageNumber });
	};

	return (
		<S.Body>
			<Title title="GUIDE">넷플레이스 이용안내</Title>

			<S.MainBox>
				<Search
					search={inputData}
					onChange={handleChangeSearch}
					onClick={handleClickSearch}
					reset={handleClickReset}
				/>

				<Filter sort={sort} onClick={handelSelectFilter} />

				{guideList?.length ? (
					<GuideList list={guideList} />
				) : (
					<S.Div>
						<NoPost>
							{inputData
								? '해당하는 게시글이 없습니다.'
								: '등록된 게시글이 없습니다.'}
						</NoPost>
					</S.Div>
				)}
			</S.MainBox>

			{/* 페이지네이션 */}
			{guideList?.length ? (
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
	);
}

export default Guide;
