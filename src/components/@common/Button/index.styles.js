import styled, { css } from 'styled-components';

const variantCSS = {
	default: css`
		background: ${({ theme }) => theme.PALETTE.orange[100]};
		color: ${({ theme }) => theme.PALETTE.white[100]};
		box-shadow:
			0 2px 4px 0 rgba(0, 0, 0, 0.2),
			0 3px 10px 0 rgba(0, 0, 0, 0.19);

		&:disabled {
			background: ${({ theme }) => theme.PALETTE.gray[100]};
			color: rgba(0, 0, 0, 0.1);
		}

		&:hover {
			background-color: ${({ theme }) => theme.PALETTE.orange[200]};
			transform: scale(1.02);
		}
	`,
	white: css`
		background: ${({ theme }) => theme.PALETTE.white[100]};
		color: ${({ theme }) => theme.PALETTE.gray[100]};
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
		font-weight: 500;

		&:hover {
			color: ${({ theme }) => theme.PALETTE.gray[200]};
			border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
			transform: scale(1.02);
		}
	`,
	orange: css`
		background: ${({ theme }) => theme.PALETTE.orange[100]};
		color: ${({ theme }) => theme.PALETTE.white[100]};

		&:hover {
			background-color: ${({ theme }) => theme.PALETTE.orange[200]};
			transform: scale(1.02);
		}
	`,
};

const shapeCSS = {
	default: css`
		border-radius: 4px;
	`,
};

const sizeCSS = {
	default: css`
		width: 320px;
		height: 40px;

		font-size: ${({ theme }) => theme.FONT_SIZE.re};
		font-weight: 500;
	`,
	twice: css`
		width: 276px;
		height: 40px;
	`,
};

export const Button = styled.button`
	cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

	${({ $shape }) => shapeCSS[$shape]};
	${({ $variant }) => variantCSS[$variant]};
	${({ size }) => sizeCSS[size]};
`;
