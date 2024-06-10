import * as S from './index.styles';

function Button(props) {
	const { variant, size, disabled, children, ...rest } = props;

	return (
		<S.Button $variant={variant} size={size} disabled={disabled} {...rest}>
			{children}
		</S.Button>
	);
}

export default Button;
