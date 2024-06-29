import { useEffect, useState } from 'react';

import useFilter from 'hooks/useFilter';
import useApi from 'hooks/useApi';
import useSearch from 'hooks/useSearch';

import * as S from './index.styles';

import Search from 'components/@common/Search';
import Title from 'components/@common/Title';
import Filter from 'components/@common/Filter';
import GuideList from 'components/pages/Guide/GuideList';

function Guide() {
	const { sort, handelSelectFilter } = useFilter();
	const { search, handleChange, handleClickReset } = useSearch();

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
	}, [sort, result.data, search]);

	const handleClickSearch = async () => {
		const req = await trigger({
			path: path + `&title=${search}&content=${search}`,
		});

		console.log(req);

		if (req.data) {
			setData(req.data.guideList);
		}
	};

	useEffect(() => {
		console.log(sort, data);
	}, [sort, data]);

	return (
		<S.Body>
			<Title title={'GUIDE'}>넷플레이스 이용안내</Title>

			<S.MainBox>
				<Search
					search={search}
					onChange={handleChange}
					onClick={handleClickSearch}
					reset={handleClickReset}
				/>
				<Filter onClick={handelSelectFilter} sort={sort} />
				<GuideList list={data} />
			</S.MainBox>

			{/* 페이지네이션 */}
			<div></div>
		</S.Body>
	);
}

export default Guide;
