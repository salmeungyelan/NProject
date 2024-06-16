import styled from 'styled-components';
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
