import * as S from './index.styles';

function Button(props) {
	const { size, variant, disabled, children, ...rest } = props;

	return (
		<S.Button size={size} $variant={variant} disabled={disabled} {...rest}>
			{children}
		</S.Button>
	);
}

export default Button;
