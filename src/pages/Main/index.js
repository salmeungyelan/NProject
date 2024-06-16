import * as S from './index.styles';

import Line from 'components/@common/Line';
import Title from 'components/@common/Title';
import More from 'components/pages/Main/More';
import List from 'components/pages/Main/List';

function Main() {
	return (
		<S.Body>
			<Title title={'MAIN'} />

			<List />

			<Line size={'width'} variant={'lightGray'} />

			<S.Mores>
				<More>공지사항</More>
				<More>이용안내</More>
			</S.Mores>
		</S.Body>
	);
}

export default Main;
