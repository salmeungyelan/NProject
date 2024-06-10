import styled from 'styled-components';
import {
	bodyContainer,
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
