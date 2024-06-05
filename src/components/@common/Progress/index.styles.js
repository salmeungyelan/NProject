import { styled, css } from 'styled-components';
import { flexCenter } from 'styles/common';

const variantCSS = {
	ing: css`
		background: ${({ theme }) => theme.PALETTE.orange[100]};
	`,
	fin: css`
		background: ${({ theme }) => theme.PALETTE.navy};
	`,
};

export const CheckProgress = styled.div`
	${flexCenter};
	${({ variant }) => variantCSS[variant]};

	color: ${({ theme }) => theme.PALETTE.white[100]};

	font-weight: 500;
	border-radius: 4px;

	width: 40px;
	height: 16px;
	font-size: ${({ theme }) => theme.FONT_SIZE.es};
`;
