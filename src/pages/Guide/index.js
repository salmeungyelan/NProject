import { useEffect, useState } from 'react';

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
	const { sort, handelSelectFilter } = useFilter();
	const { inputData, setInputData, handleChangeSearch } = useInput();

	const [guideList, setGuideList] = useState([]);

	const itemsPerPage = 8;
	const { currentPage, setCurrentPage, total, setTotal } = usePagination();

	const basePath = `/client/guides?size=${itemsPerPage}&page=${currentPage}&sortBy=${sort}`;
	const fullPath = basePath + `&title=${inputData}&content=${inputData}`;

	const { result, trigger } = useApi({
		path: basePath,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setGuideList(result.data.guideList);
			setTotal(result.data.total);
		}
	}, [result.data]);

	useEffect(() => {
		trigger({ path: fullPath, applyResult: true });
	}, [sort, currentPage]);

	// 검색
	const handleClickSearch = async () => {
		setCurrentPage(1);
		await trigger({ path: fullPath, applyResult: true });
	};

	// 검색 초기화
	const handleClickReset = async () => {
		setCurrentPage(1);
		setInputData('');

		await trigger({ path: basePath, applyResult: true });
	};

	// 페이지 이동
	const handlePageChange = async pageNumber => {
		await trigger({ path: fullPath, applyResult: true });
		setCurrentPage(pageNumber);
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
