import { useEffect, useState } from 'react';

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
	const { sort, handelSelectFilter } = useFilter();
	const { inputData, setInputData, handleChangeSearch } = useInput();

	const [noticeList, setNoticeList] = useState([]);
	const [navClicked, setNavClicked] = useState('전체');

	const itemsPerPage = 8;
	const { currentPage, setCurrentPage, total, setTotal } = usePagination();

	// 초기 api path
	const basePath = `/client/notices/all?size=${itemsPerPage}&page=${currentPage}&sortBy=${sort}`;

	// 전체 중요 일반 선택
	const noticeType =
		navClicked !== '전체' ? `&noticeContentType=${navClicked}` : '';

	// 검색 데이터까지 있는 총 api path
	const fullPath =
		basePath + `&title=${inputData}&content=${inputData}&${noticeType}`;

	const { result, trigger } = useApi({
		path: basePath,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setNoticeList(result.data.noticeList);
			setTotal(result.data.total);
		}
	}, [result.data]);

	useEffect(() => {
		trigger({ path: fullPath, applyResult: true });
	}, [sort, navClicked, currentPage]);

	// 전체 / 중요 / 일반
	const handleClickNav = async e => {
		setCurrentPage(1);

		const { name } = e.target;
		setNavClicked(name);

		const noticeType = name === '전체' ? '' : `&noticeContentType=${name}`;
		await trigger({ path: basePath + noticeType, applyResult: true });
	};

	// 검색
	const handleClickSearch = async () => {
		setCurrentPage(1);
		await trigger({ path: fullPath, applyResult: true });
	};

	// 검색 초기화
	const handleReset = async () => {
		setInputData('');
		setCurrentPage(1);
		await trigger({ path: basePath + noticeType, applyResult: true });
	};

	// 페이지 이동
	const handlePageChange = async pageNumber => {
		await trigger({ path: fullPath, applyResult: true });
		setCurrentPage(pageNumber);
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
