import * as S from './index.styles';

function Input(props) {
	const { size, ...rest } = props;

	return <S.Input size={size} {...rest} />;
}

export default Input;
