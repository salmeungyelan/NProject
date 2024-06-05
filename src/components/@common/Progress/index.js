import * as S from './index.styles';

function Progress(props) {
	const { children, variant } = props;

	return <S.CheckProgress variant={variant}>{children}</S.CheckProgress>;
}

export default Progress;
