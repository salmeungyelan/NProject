import { css, styled } from 'styled-components';

const sizeCSS = {
	width: css`
		height: 1px;
		width: 100%;
	`,
	height: css`
		width: 1px;
		height: 16px;
	`,
};

export const Lines = styled.div`
	${({ size }) => sizeCSS[size]}

	background-color: ${({ theme }) => theme.PALETTE.gray[200]};
`;
