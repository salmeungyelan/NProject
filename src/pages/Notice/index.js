import * as S from './index.styles';

import Title from 'components/@common/Title';
import Search from 'components/@common/Search';
import Filter from 'components/@common/Filter';
import NoticeList from 'components/pages/Notice/NoticeList';

function Notice() {
	return (
		<S.Body>
			<S.TopBox>
				<Title>NOTICE</Title>
				<span>넷플레이스 공지사항 안내</span>
			</S.TopBox>

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
