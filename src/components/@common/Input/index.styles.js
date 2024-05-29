import { css, styled } from 'styled-components';

const sizeCSS = {
	default: css`
		width: 100%;
		height: 40px;
	`,
	medium: css`
		height: 2px;
		width: 1080px;
	`,
	height: css`
		width: 1px;
		height: 16px;
	`,
};

export const Input = styled.input`
	${({ size }) => sizeCSS[size]};

	color: ${({ theme }) => theme.PALETTE.gray[300]};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-weight: 400;

	padding: 0px 16px;

	outline: none;
	border-radius: 4px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};

	& :focus {
		border: 2px solid ${({ theme }) => theme.PALETTE.orange[100]};
	}
`;
