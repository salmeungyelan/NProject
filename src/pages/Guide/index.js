import { useEffect, useState } from 'react';

import useFilter from 'hooks/useFilter';
import useApi from 'hooks/useApi';

import * as S from './index.styles';

import Search from 'components/@common/Search';
import Title from 'components/@common/Title';
import Filter from 'components/@common/Filter';
import GuideList from 'components/pages/Guide/GuideList';

function Guide() {
	const { sort, handelSelectFilter } = useFilter();

	const [data, setData] = useState([]);

	const { result, trigger } = useApi({
		path: `/client/guides?page=1&size=7&sortBy=${sort.sortBy}`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setData(result.data.guideList);
		}

		trigger({
			path: `/client/guides?page=1&size=8&sortBy=${sort.sortBy}`,
			applyResult: false,
		});
	}, [sort.sortBy, result.data]);

	return (
		<S.Body>
			<Title title={'GUIDE'}>넷플레이스 이용안내</Title>

			<S.MainBox>
				<Search />
				<Filter onClick={handelSelectFilter} sort={sort} />
				<GuideList list={data} />
			</S.MainBox>

			{/* 페이지네이션 */}
			<div></div>
		</S.Body>
	);
}

export default Guide;
