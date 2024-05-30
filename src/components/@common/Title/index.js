import * as S from './index.styles';
import Line from '../Line';

function Title({ children }) {
	return (
		<S.Titles>
			<Line size={'default'} variant={'orange'} />
			<div>{children}</div>
		</S.Titles>
	);
}

export default Title;
