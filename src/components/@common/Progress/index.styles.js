import { styled, css } from 'styled-components';
import { flexCenter } from 'styles/common';

const variantCSS = {
	REVIEW_STATUS_01: css`
		background: ${({ theme }) => theme.PALETTE.gray[100]};
	`,
	REVIEW_STATUS_02: css`
		background: ${({ theme }) => theme.PALETTE.blue};
	`,
	REVIEW_STATUS_03: css`
		background: ${({ theme }) => theme.PALETTE.orange[100]};
	`,
	REVIEW_STATUS_04: css`
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
		height: ${({ $review }) => ($review ? '25px' : '18px')};
		font-size: ${({ theme }) => theme.FONT_SIZE.s};
	}
`;
