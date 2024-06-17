import { styled, css } from 'styled-components';

const sizeCSS = {
	default: css`
		width: 150px;
		height: 130px;
	`,
	header: css`
		width: 46px;
		height: 47px;

		@media screen and (min-width: 768px) {
			width: 62px;
			height: 64px;
		}
	`,
};

export const LogoImg = styled.img`
	${({ size }) => sizeCSS[size]}
`;
