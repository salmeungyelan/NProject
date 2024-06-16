import styled from 'styled-components';
import { flexCenter, flexColumn } from 'styles/common';

export const Body = styled.div`
	height: 172px;
	border-top: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	background-color: ${({ theme }) => theme.PALETTE.white[0]};
	padding: 24px 12px;
	${flexColumn}
	gap: 14px;

	> div:first-child {
		${flexColumn}
		gap: 16px;
	}

	@media screen and (min-width: 768px) {
		height: 236px;
		padding: 36px 24px;
		gap: 32px;

		> div:last-child {
			${flexCenter}
			justify-content: right;

			> button {
				width: 180px;
			}
		}
	}

	@media screen and (min-width: 1200px) {
		height: 244px;
		padding: 36px 24px;
		gap: 32px;

		> div:last-child {
			${flexCenter}
			justify-content: right;

			> button {
				width: 180px;
			}
		}
	}
`;

export const Status = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.m};
	color: ${({ theme }) => theme.PALETTE.gray[300]};
	padding: 4px 8px;
	background-color: ${({ theme }) => theme.PALETTE.white[150]};
	width: 68px;
	border-radius: 4px;
	font-weight: 600;
	text-align: center;

	@media screen and (min-width: 768px) {
		width: 86px;
		padding: 6px 10px;
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	}

	@media screen and (min-width: 1200px) {
		width: 92px;
		font-size: ${({ theme }) => theme.FONT_SIZE.l};
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
