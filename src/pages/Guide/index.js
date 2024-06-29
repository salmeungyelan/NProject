import { useEffect, useState } from 'react';

import useFilter from 'hooks/useFilter';
import useInput from 'hooks/useInput';
import useApi from 'hooks/useApi';

import * as S from './index.styles';

import Search from 'components/@common/Search';
import Title from 'components/@common/Title';
import Filter from 'components/@common/Filter';
import GuideList from 'components/pages/Guide/GuideList';
import NoPost from 'components/@common/NoPost';

function Guide() {
	const { sort, handelSelectFilter } = useFilter();
	const { inputData, setInputData, handleChangeSearch } = useInput();

	const [data, setData] = useState([]);

	const path = `/client/guides?page=1&size=7&sortBy=${sort}`;

	const { result, trigger } = useApi({
		path,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setData(result.data.guideList);
		}

		const fullPath = path + `&title=${inputData}&content=${inputData}`;

		const fetchData = async () => {
			try {
				const req = await trigger({ path: fullPath });

				if (req.data) {
					setData(req.data.guideList);
				}
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, [sort, result.data, inputData]);

	// 검색
	const handleClickSearch = async () => {
		try {
			const req = await trigger({
				path: path + `&title=${inputData}&content=${inputData}`,
			});

			if (req.data) {
				setData(req.data.guideList);
			}
		} catch (error) {}
	};

	// 검색 초기화
	const handleClickReset = () => {
		setInputData('');
	};

	return (
		<S.Body>
			<Title title={'GUIDE'}>넷플레이스 이용안내</Title>

			<S.MainBox>
				<Search
					search={inputData}
					onChange={handleChangeSearch}
					onClick={handleClickSearch}
					reset={handleClickReset}
				/>
				<Filter onClick={handelSelectFilter} sort={sort} />
				{data.length > 0 ? (
					<GuideList list={data} />
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

export default Guide;
