import * as S from './index.styles';

import GuideList from 'components/pages/Guide/GuideList';

import Search from 'components/@common/Search';
import Title from 'components/@common/Title';
import Filter from 'components/@common/Filter';

function Guide() {
	return (
		<S.Body>
			<Title title={'GUIDE'}>넷플레이스 이용안내</Title>

			<S.MainBox>
				<Search />
				<Filter />
				<GuideList />
			</S.MainBox>

			{/* 페이지네이션 */}
			<div></div>
		</S.Body>
	);
}

export default Guide;
