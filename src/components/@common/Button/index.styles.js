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
	`,
};

const shapeCSS = {
	default: css`
		border-radius: 0.25rem;
	`,
};

const sizeCSS = {
	default: css`
		width: 320px;
		height: 40px;

		font-size: ${({ theme }) => theme.FONT_SIZE.re};
		font-weight: 500;
	`,
};

export const Button = styled.button`
	cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

	${({ $shape }) => shapeCSS[$shape]};
	${({ $variant }) => variantCSS[$variant]};
	${({ size }) => sizeCSS[size]};

	&:hover,
	&:active {
		background-color: ${({ theme }) => theme.PALETTE.orange[200]};
	}
`;
