import { css, styled } from 'styled-components';

const variantCSS = {
	default: css`
		color: ${({ theme }) => theme.PALETTE.gray[200]};
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};

		&:focus {
			border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
		}
	`,
	login: css`
		color: ${({ theme }) => theme.PALETTE.gray[200]};
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};

		&:focus {
			border: 1px solid ${({ theme }) => theme.PALETTE.orange[100]};
		}
	`,
};

const sizeCSS = {
	default: css`
		width: 100%;
		height: 40px;
	`,
	height: css`
		width: 100%;
		height: 28px;

		@media screen and (min-width: 376px) {
			height: 32px;
		}

		@media screen and (min-width: 769px) {
			height: 40px;
		}
	`,
};

export const Input = styled.input`
	${({ size }) => sizeCSS[size]};
	${({ variant }) => variantCSS[variant]}

	font-size: ${({ theme }) => theme.FONT_SIZE.m};
	font-weight: 400;

	padding: 0px 16px;
	border-radius: 4px;

	outline: none;

	&::placeholder {
		color: ${({ theme }) => theme.PALETTE.gray[100]};
		font-weight: 400;
	}
`;
