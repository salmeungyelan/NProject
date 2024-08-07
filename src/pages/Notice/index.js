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
import NoticeList from 'components/pages/Notice/NoticeList';
import NoPost from 'components/@common/NoPost';
import Pagination from 'components/@common/Pagination';

function Notice() {
	const { sort, setSort, handelSelectFilter } = useFilter();
	const { inputData, setInputData, handleChangeSearch } = useInput();

	const location = useLocation();
	const navigate = useNavigate();

	// 쿼리스트링에서 상태를 가져오는 함수
	const getQueryParams = () => {
		const params = new URLSearchParams(location.search);
		return {
			sort: params.get('sort') || sort,
			inputData: params.get('title') || '',
			currentPage: parseInt(params.get('page'), 10) || 1,
			navClicked: params.get('nav') || '전체',
		};
	};

	useEffect(() => {
		const params = getQueryParams();
		setSort(params.sort);
		setInputData(params.inputData);
		setCurrentPage(params.currentPage);
		setNavClicked(params.navClicked);
	}, [location.search]);

	const [noticeList, setNoticeList] = useState([]);
	const [navClicked, setNavClicked] = useState(getQueryParams().navClicked);

	const itemsPerPage = 8;
	const { currentPage, setCurrentPage, total, setTotal } = usePagination();

	const basePath = `/client/notices/all?size=${itemsPerPage}&page=${currentPage}&sortBy=${sort}`;
	const noticeType =
		navClicked !== '전체' ? `&noticeContentTypes[]=${navClicked}` : '';
	const fullPath =
		basePath + `&title=${inputData}&content=${inputData}&${noticeType}`;

	const { result, trigger } = useApi({
		path: fullPath,
		shouldFetch: true,
	});

	useEffect(() => {
		trigger({ path: fullPath, applyResult: true });
	}, [sort, navClicked, currentPage]);

	useEffect(() => {
		if (result.data) {
			setNoticeList(result.data.noticeList);
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

	// 전체 / 중요 / 일반
	const handleClickNav = async e => {
		setCurrentPage(1);

		const { name } = e.target;
		setNavClicked(name);

		const noticeType = name === '전체' ? '' : `&noticeContentTypes[]=${name}`;
		updateQueryParams({ page: 1, nav: name });
		await trigger({ path: basePath + noticeType, applyResult: true });
	};

	// 검색
	const handleClickSearch = async () => {
		setCurrentPage(1);
		updateQueryParams({ page: 1, title: inputData, content: inputData });
		await trigger({ path: fullPath, applyResult: true });
	};

	// 검색 초기화
	const handleReset = async () => {
		setInputData('');
		setCurrentPage(1);
		updateQueryParams({ page: 1, title: '', content: '', sort: '' });
		await trigger({ path: basePath + noticeType, applyResult: true });
	};

	// 페이지 이동
	const handlePageChange = async pageNumber => {
		setCurrentPage(pageNumber);
		updateQueryParams({ page: pageNumber });
		// await trigger({ path: fullPath, applyResult: true });
	};

	return (
		<S.Body>
			<Title title="NOTICE">넷플레이스 공지사항 안내</Title>

			<S.MainBox>
				<S.Select>
					<ul>
						<S.Li>
							<label>
								<input
									type="radio"
									name="전체"
									checked={navClicked === '전체'}
									onClick={handleClickNav}
									readOnly
								/>
								전체
							</label>
						</S.Li>
						<S.Li>
							<label>
								<input
									type="radio"
									name="NOTICE_CONTENT_TYPE_01"
									checked={navClicked === 'NOTICE_CONTENT_TYPE_01'}
									onClick={handleClickNav}
									readOnly
								/>
								중요
							</label>
						</S.Li>
						<S.Li>
							<label>
								<input
									type="radio"
									name="NOTICE_CONTENT_TYPE_02"
									checked={navClicked === 'NOTICE_CONTENT_TYPE_02'}
									onClick={handleClickNav}
									readOnly
								/>
								일반
							</label>
						</S.Li>
					</ul>
				</S.Select>

				<Search
					search={inputData}
					onChange={handleChangeSearch}
					onClick={handleClickSearch}
					reset={handleReset}
				/>

				<Filter sort={sort} onClick={handelSelectFilter} />

				{noticeList?.length ? (
					<NoticeList list={noticeList} />
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
			{noticeList?.length ? (
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

export default Notice;
