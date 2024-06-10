import styled from 'styled-components';
import { flexAlignCenter, flexCenter } from 'styles/common';

export const Body = styled.div`
	${flexAlignCenter}
	gap: 10px;

	@media screen and (min-width: 376px) {
		gap: 16px;
	}
`;

export const Sort = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	${flexCenter}
	gap: 3px;
	color: ${({ theme }) => theme.PALETTE.gray[100]};

	/* 클릭 시 변경 색
	color: ${({ theme }) => theme.PALETTE.gray[300]};
	> span {
		color: ${({ theme }) => theme.PALETTE.orange[100]};
	} */

	@media screen and (min-width: 376px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}
`;
