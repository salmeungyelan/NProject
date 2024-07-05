import * as S from './index.styles';

function Logo(props) {
	const { size, white } = props;

	const logoSrc = '/assets/images/Logo-white.png';

	return (
		<S.LogoImg
			size={size}
			src={white ? logoSrc : '/assets/images/Logo.png'}
			alt="NetPlace Logo"
		/>
	);
}

export default Logo;
