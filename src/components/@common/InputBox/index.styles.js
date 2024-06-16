import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

export const InputBox = styled.div`
	width: ${({ $register }) => ($register ? '320px' : '100%')};
`;

export const H1 = styled.h1`
	font-weight: 400;
	color: ${({ theme }) => theme.PALETTE.orange[100]};
	margin-bottom: 10px;

	font-size: ${({ theme, $register }) =>
		$register ? theme.FONT_SIZE.ml : theme.FONT_SIZE.m};

	@media screen and (min-width: 768px) {
		font-size: ${({ theme, $register }) =>
			$register ? theme.FONT_SIZE.ml : theme.FONT_SIZE.ml};
	}

	@media screen and (min-width: 1200px) {
		font-size: ${({ theme, $register }) =>
			$register ? theme.FONT_SIZE.ml : theme.FONT_SIZE.l};
	}
`;

export const EX = styled.div`
	${flexAlignCenter}
	margin-top: 4px;

	> span {
		font-weight: 400;
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
		color: ${({ theme }) => theme.PALETTE.gray[100]};
	}

	> img {
		width: 21px;
	}
`;

export const Message = styled.p`
	height: ${({ $message }) => ($message ? '12px' : '0')};
	margin-top: 4px;
	font-weight: 400;
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	color: ${({ theme }) => theme.PALETTE.red[100]};
	white-space: pre-line;
`;
