import styled from 'styled-components';
import { flexCenter, flexColumn } from 'styles/common';

export const Body = styled.div`
	height: ${({ $isTempSave }) => ($isTempSave ? '180px' : '140px')};
	border-top: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	background-color: ${({ theme }) => theme.PALETTE.white[0]};
	padding: 24px 12px;
	${flexColumn}
	gap: 20px;

	> div:first-child {
		${flexColumn}
		gap: 16px;
	}

	@media screen and (min-width: 768px) {
		height: 200px;
		padding: 36px 24px;
		gap: 32px;
	}

	@media screen and (min-width: 1200px) {
		height: 220px;
		padding: 36px 24px;
		gap: 32px;
	}
`;

export const Ex = styled.span`
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	color: ${({ theme }) => theme.PALETTE.gray[200]};
	line-height: 20px;

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
		line-height: 24px;
	}

	@media screen and (min-width: 1200px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.l};
		line-height: 28px;
	}
`;

export const ButtonBox = styled.div`
	${flexColumn}
	gap: 10px;

	@media screen and (min-width: 768px) {
		${flexCenter}
		justify-content: right;
		flex-direction: row-reverse;
		gap: 10px;

		> button {
			width: 180px;
		}
	}
`;
