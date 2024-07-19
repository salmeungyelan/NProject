import { styled, css } from 'styled-components';
import { flexCenter } from 'styles/common';

const variantCSS = {
	'01': css`
		background: ${({ theme }) => theme.PALETTE.gray[100]};
	`,
	'02': css`
		background: ${({ theme }) => theme.PALETTE.blue};
	`,
	'03': css`
		background: ${({ theme }) => theme.PALETTE.orange[100]};
	`,
	'04': css`
		background: ${({ theme }) => theme.PALETTE.navy};
	`,
	'05': css`
		background: ${({ theme }) => theme.PALETTE.red[100]};
	`,
};

export const CheckProgress = styled.div`
	${flexCenter};
	${({ $variant }) => variantCSS[$variant]};

	color: ${({ theme }) => theme.PALETTE.white[100]};

	font-weight: 500;
	border-radius: 4px;

	width: 40px;
	height: ${({ $isReview }) => ($isReview ? '18px' : '16px')};
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};

	@media screen and (min-width: 768px) {
		width: ${({ $isReview }) => ($isReview ? '45px' : '40px')};
		height: ${({ $isReview }) => ($isReview ? '22px' : '18px')};
		font-size: ${({ theme }) => theme.FONT_SIZE.s};
	}
`;
