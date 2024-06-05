import * as S from './index.styles';

function Progress(props) {
	const { children, variant, shape } = props;

	return (
		<S.CheckProgress variant={variant} shape={shape}>
			{children}
		</S.CheckProgress>
	);
}

export default Progress;
