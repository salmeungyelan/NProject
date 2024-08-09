import * as S from './index.styles';

function Button(props) {
	const { size, variant, disabled, scale, children, ...rest } = props;

	return (
		<S.Button
			size={size}
			$variant={variant}
			disabled={disabled}
			$scale={scale}
			{...rest}
		>
			{children}
		</S.Button>
	);
}

export default Button;
