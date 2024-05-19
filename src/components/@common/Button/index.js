import * as S from './index.styles';

function Button(props) {
	const { variant, shape, size, disabled, children, ...rest } = props;

	return (
		<S.Button
			disabled={disabled}
			$shape={shape}
			$variant={variant}
			size={size}
			{...rest}
		>
			{children}
		</S.Button>
	);
}

export default Button;
