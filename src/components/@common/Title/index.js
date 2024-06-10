import * as S from './index.styles';
import Line from '../Line';

function Title({ children }) {
	return (
		<S.Titles>
			<Line size={'default'} variant={'orange'} />
			<span>{children}</span>
		</S.Titles>
	);
}

export default Title;
