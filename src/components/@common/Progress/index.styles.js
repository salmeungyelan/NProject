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
	${({ variant }) => variantCSS[variant]};

	width: 40px;
	height: 16px;
	${flexCenter}

	color: ${({ theme }) => theme.PALETTE.white[100]};
	font-size: ${({ theme }) => theme.FONT_SIZE.es};
	font-weight: 500;
	border-radius: 4px;
`;
