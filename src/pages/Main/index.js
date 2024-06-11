import * as S from './index.styles';

import List from 'components/pages/Main/List';
import More from 'components/pages/Main/More';

import Line from 'components/@common/Line';
import Title from 'components/@common/Title';

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
