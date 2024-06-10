import * as S from './index.styles';

import Search from 'components/@common/Search';
import Title from 'components/@common/Title';
import Filter from 'components/@common/Filter';

import GuideList from 'components/pages/Guide/GuideList';

function Guide() {
	return (
		<S.Body>
			<S.TopBox>
				<Title>GUIDE</Title>
				<span>넷플레이스 이용안내</span>
			</S.TopBox>

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
