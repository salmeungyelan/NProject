import * as S from './index.styles';

function Textarea(props) {
	const { variant, size, ...rest } = props;

	return <S.Textarea $variant={variant} size={size} {...rest} />;
}

export default Textarea;
