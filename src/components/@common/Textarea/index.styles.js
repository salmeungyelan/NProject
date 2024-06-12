import { css, styled } from 'styled-components';

const variantCSS = {
	default: css`
		color: ${({ theme }) => theme.PALETTE.gray[200]};
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};

		&:focus {
			border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
		}
	`,
};

const sizeCSS = {
	default: css`
		width: 100%;
		height: 96px;

		@media screen and (min-width: 768px) {
			height: 146px;
		}
	`,
};

export const Textarea = styled.textarea`
	${({ size }) => sizeCSS[size]};
	${({ $variant }) => variantCSS[$variant]}

	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	font-weight: 400;
	line-height: 1.5;
	white-space: pre-wrap;
	padding: 10px;
	border-radius: 4px;
	resize: none;
	outline: none;

	&::placeholder {
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
		color: ${({ theme }) => theme.PALETTE.gray[100]};
		font-weight: 400;
	}

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};

		&::placeholder {
			font-size: ${({ theme }) => theme.FONT_SIZE.m};
		}
	}

	@media screen and (min-width: 1200px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};

		&::placeholder {
			font-size: ${({ theme }) => theme.FONT_SIZE.ml};
		}
	}
`;
