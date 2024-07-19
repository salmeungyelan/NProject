import styled, { css } from 'styled-components';
import { flexAlignCenter, flexColumn } from 'styles/common';

export const Address = styled.div`
	${flexColumn}
	gap: 6px;

	width: 100%;

	> p {
		height: 16px;
		margin-top: 4px;
		font-weight: 400;
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
		color: ${({ theme }) => theme.PALETTE.red[100]};
	}

	> div {
		${flexAlignCenter}
		gap: 6px;
	}
`;

export const H1 = styled.h1`
	font-weight: 400;
	font-size: ${({ theme, $register }) =>
		$register ? theme.FONT_SIZE.ml : theme.FONT_SIZE.m};
	color: ${({ theme }) => theme.PALETTE.orange[100]};
	margin-bottom: 10px;

	@media screen and (min-width: 768px) {
		font-size: ${({ theme, $register }) =>
			$register ? theme.FONT_SIZE.ml : theme.FONT_SIZE.ml};
	}

	@media screen and (min-width: 1200px) {
		font-size: ${({ theme, $register }) =>
			$register ? theme.FONT_SIZE.ml : theme.FONT_SIZE.l};
	}
`;

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
};

export const Input = styled.input`
	${({ size }) => sizeCSS[size]};

	color: ${({ theme }) => theme.PALETTE.gray[200]};
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};

	&:focus {
		border: 1px solid ${({ theme }) => theme.PALETTE.gray[100]};
	}

	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	font-weight: 400;

	padding: 0px 10px;
	border-radius: 4px;

	outline: none;

	&::placeholder {
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
		color: ${({ theme }) => theme.PALETTE.gray[100]};
		font-weight: 400;
	}

	/* 숫자 입력란의 증감키 숨기기 */
	&[type='number']::-webkit-outer-spin-button,
	&[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&[type='number'] {
		-moz-appearance: textfield; /* Firefox에서 증감키 숨기기 */
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
