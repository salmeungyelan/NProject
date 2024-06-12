import { styled, css } from 'styled-components';
import { flexCenter } from 'styles/common';

const variantCSS = {
	tempSave: css`
		background: ${({ theme }) => theme.PALETTE.gray[100]};
	`,
	wait: css`
		background: ${({ theme }) => theme.PALETTE.blue};
	`,
	ing: css`
		background: ${({ theme }) => theme.PALETTE.orange[100]};
	`,
	fin: css`
		background: ${({ theme }) => theme.PALETTE.navy};
	`,
};

export const CheckProgress = styled.div`
	${flexCenter};
	${({ $variant }) => variantCSS[$variant]};

	color: ${({ theme }) => theme.PALETTE.white[100]};

	font-weight: 500;
	border-radius: 4px;

	width: 40px;
	height: ${({ $review }) => ($review ? '18px' : '16px')};
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};

	@media screen and (min-width: 768px) {
		width: ${({ $review }) => ($review ? '50px' : '40px')};
		height: ${({ $review }) => ($review ? '20px' : '18px')};
		font-size: ${({ theme }) => theme.FONT_SIZE.s};
	}
`;
