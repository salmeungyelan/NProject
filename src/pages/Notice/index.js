import * as S from './index.styles';

import NoticeList from 'components/pages/Notice/NoticeList';

import Title from 'components/@common/Title';
import Search from 'components/@common/Search';
import Filter from 'components/@common/Filter';

function Notice() {
	return (
		<S.Body>
			<Title title={'NOTICE'}>넷플레이스 공지사항 안내</Title>

			<S.MainBox>
				<S.Select>
					<ul>
						<li>전체</li>
						<li>중요</li>
						<li>일반</li>
					</ul>
				</S.Select>
				<Search />
				<Filter />
				<NoticeList />
			</S.MainBox>

			{/* 페이지네이션 */}
			<div></div>
		</S.Body>
	);
}

export default Notice;
