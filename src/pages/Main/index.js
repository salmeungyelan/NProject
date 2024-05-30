import Line from 'components/@common/Line';
import * as S from './index.styles';
import Title from 'components/@common/Title';
import More from 'components/pages/Main/More';
import Card from 'components/@common/Card';

function Main() {
	return (
		<S.Body>
			<Title>MAIN</Title>

			<div>
				<Card />
			</div>

			<Line size={'width'} variant={'lightGray'} />

			<S.Mores>
				<More>공지사항</More>
				<More>이용안내</More>
			</S.Mores>
		</S.Body>
	);
}

export default Main;
