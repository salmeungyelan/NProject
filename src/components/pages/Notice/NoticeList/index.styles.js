import styled from 'styled-components';
import {
	bodyContainer,
	flexCenter,
	flexColumn,
	flexSpaceBetweenCenter,
} from 'styles/common';

export const Body = styled.div`
	${bodyContainer}

	> div:last-child {
		border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	}
`;

export const Box = styled.div`
	width: 100%;
	padding: 13px 0;
	${flexColumn}
	gap: 8px;
	border-top: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
`;

export const Title = styled.span`
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	color: ${({ theme }) => theme.PALETTE.gray[300]};

	@media screen and (min-width: 376px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	}
`;

export const ImportantBox = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;

	& img {
		width: 15px;
	}
`;

export const Important = styled.div`
	width: 28px;
	height: 14px;
	${flexCenter}
	background-color: ${({ theme }) => theme.PALETTE.orange[100]};
	color: ${({ theme }) => theme.PALETTE.white[100]};
	border-radius: 15px;
	font-weight: 500;
	font-size: ${({ theme }) => theme.FONT_SIZE.xxs};

	@media screen and (min-width: 376px) {
		width: 41px;
		height: 20px;
		font-size: ${({ theme }) => theme.FONT_SIZE.s};
	}
`;

export const Content = styled.div`
	width: 100%;
	${flexSpaceBetweenCenter}
	gap: 7px;

	@media screen and (min-width: 376px) {
		gap: 14px;
	}
`;

export const Description = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	width: calc(100% - 80px);
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	color: ${({ theme }) => theme.PALETTE.gray[100]};

	@media screen and (min-width: 376px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
		width: calc(100% - 104px);
	}
`;

export const Date = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	width: 80px;
	color: ${({ theme }) => theme.PALETTE.gray[100]};

	@media screen and (min-width: 376px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
		width: 104px;
	}
`;
