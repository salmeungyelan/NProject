import * as S from './index.styles';

function Line(props) {
	const { size, variant } = props;

	return <S.Lines size={size} $variant={variant} />;
}

export default Line;
