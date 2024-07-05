import { useEffect, useState } from 'react';

import useFilter from 'hooks/useFilter';
import useInput from 'hooks/useInput';
import useApi from 'hooks/useApi';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import Search from 'components/@common/Search';
import Filter from 'components/@common/Filter';
import NoticeList from 'components/pages/Notice/NoticeList';
import NoPost from 'components/@common/NoPost';

function Notice() {
	const { sort, handelSelectFilter } = useFilter();
	const { inputData, setInputData, handleChangeSearch } = useInput();

	const [navClicked, setNavClicked] = useState('전체');
	const [data, setData] = useState([]);

	const path = `/client/notices/all?page=1&size=7&sortBy=${sort}`;

	const { result, trigger } = useApi({
		path,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setData(result.data.noticeList);
		}

		const noticeType =
			navClicked !== '전체' && `&noticeContentType=${navClicked}`;
		const fullPath =
			path + `&title=${inputData}&content=${inputData}&${noticeType}`;

		const fetchData = async () => {
			try {
				const req = await trigger({ path: fullPath });

				if (req.data) {
					setData(req.data.noticeList);
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, [sort, result.data, navClicked]);

	// 전체 / 중요 / 일반
	const handleClickNav = async e => {
		const { name } = e.target;
		setNavClicked(name);

		const noticeType = name === '전체' ? '' : `&noticeContentType=${name}`;

		try {
			const req = await trigger({
				path: path + `&title=${inputData}&content=${inputData}&${noticeType}`,
			});

			if (req.data) {
				setData(req.data.noticeList);
			}
		} catch (error) {}
	};

	// 검색
	const handleClickSearch = async () => {
		const noticeType =
			navClicked !== '전체' && `&noticeContentType=${navClicked}`;

		try {
			const req = await trigger({
				path: path + `&title=${inputData}&content=${inputData}&${noticeType}`,
			});

			if (req.data) {
				setData(req.data.noticeList);
			}
		} catch (error) {}
	};

	// 검색 초기화
	const handleReset = async () => {
		setInputData('');

		const noticeType =
			navClicked !== '전체' ? `&noticeContentType=${navClicked}` : '';

		try {
			const req = await trigger({
				path: path + noticeType,
			});

			if (req.data) {
				setData(req.data.noticeList);
			}
		} catch (error) {}
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

				<Filter onClick={handelSelectFilter} sort={sort} />

				{data.length ? (
					<NoticeList list={data} />
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
			<div></div>
		</S.Body>
	);
}

export default Notice;
