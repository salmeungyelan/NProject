import * as S from './index.styles';

function Input(props) {
	const { size, variant, ...rest } = props;

	return <S.Input size={size} variant={variant} {...rest} />;
}

export default Input;
