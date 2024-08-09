import styled, { css } from 'styled-components';

const sizeCSS = {
	default: css`
		width: 100%;
		height: 40px;
	`,
	height: css`
		width: 100%;
		height: 28px;

		@media screen and (min-width: 768px) {
			height: 32px;
		}

		@media screen and (min-width: 1200px) {
			height: 40px;
		}
	`,
	error: css`
		width: 276px;
		height: 40px;
	`,
};

const variantCSS = {
	default: css`
		color: ${({ theme }) => theme.PALETTE.white[100]};
		background: ${({ theme }) => theme.PALETTE.orange[100]};

		&:hover {
			background-color: ${({ theme }) => theme.PALETTE.orange[200]};
		}
	`,
	white: css`
		color: ${({ theme }) => theme.PALETTE.gray[100]};
		background: ${({ theme }) => theme.PALETTE.white[100]};
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};

		&:hover {
			color: ${({ theme }) => theme.PALETTE.gray[200]};
		}
	`,
};

export const Button = styled.button`
	border-radius: 4px;
	font-weight: 500;
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
	box-shadow: 0 2px 4px 0 #00000026;

	${({ size }) => sizeCSS[size]};
	${({ $variant }) => variantCSS[$variant]};

	&:hover {
		transform: ${({ $scale }) => ($scale ? 'none' : 'scale(1.02)')};
	}

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	}
`;
