import * as S from './index.styles';

import Line from '../Line';

function Title(props) {
	const { title, children } = props;

	return (
		<S.TitleBox>
			<S.Title>
				<Line size="default" variant="orange" />
				<span>{title}</span>
			</S.Title>

			<p>{children}</p>
		</S.TitleBox>
	);
}

export default Title;
