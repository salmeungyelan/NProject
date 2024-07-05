import * as S from './index.styles';

import Title from 'components/@common/Title';
import List from 'components/pages/Home/List';
import Line from 'components/@common/Line';
import More from 'components/pages/Home/More';

function Home() {
	return (
		<S.Body>
			<Title title="MAIN" />

			<List />

			<Line size="width" variant="lightGray" />

			<S.Mores>
				<More>공지사항</More>
				<More>이용안내</More>
			</S.Mores>
		</S.Body>
	);
}

export default Home;
