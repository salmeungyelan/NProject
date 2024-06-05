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

const shapeCSS = {
	default: css`
		width: 40px;
		height: 16px;
		font-size: ${({ theme }) => theme.FONT_SIZE.es};
	`,
	big: css`
		width: 73px;
		height: 28px;
		font-size: ${({ theme }) => theme.FONT_SIZE.re};
	`,
};

export const CheckProgress = styled.div`
	${flexCenter}
	${({ variant }) => variantCSS[variant]};
	${({ shape }) => shapeCSS[shape]}

	color: ${({ theme }) => theme.PALETTE.white[100]};

	font-weight: 500;
	border-radius: 4px;
`;
