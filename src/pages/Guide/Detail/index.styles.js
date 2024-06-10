import styled from 'styled-components';
import {
	bodyContainer,
	flexCenter,
	flexColumn,
	flexSpaceBetweenCenter,
} from 'styles/common';

export const Body = styled.div`
	${bodyContainer}
	padding: 50px 0;
	${flexColumn}
	gap: 32px;
`;

export const TopBox = styled.div`
	${flexColumn};
	gap: 8px;

	> span {
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
		color: ${({ theme }) => theme.PALETTE.gray[100]};
	}
`;

export const Content = styled.div`
	${flexColumn}
	gap: 12px;
	width: 100%;
	height: auto;

	@media screen and (min-width: 376px) {
		gap: 18px;
	}
`;

export const Title = styled.span`
	font-weight: 500;
	font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	color: ${({ theme }) => theme.PALETTE.gray[300]};

	@media screen and (min-width: 376px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.j};
	}
`;

export const Info = styled.div`
	${flexSpaceBetweenCenter}

	> span {
		font-size: ${({ theme }) => theme.FONT_SIZE.s};
		color: ${({ theme }) => theme.PALETTE.gray[300]};

		@media screen and (min-width: 376px) {
			font-size: ${({ theme }) => theme.FONT_SIZE.ml};
		}
	}
`;

export const Description = styled.pre`
	line-height: 22px;
	white-space: pre-wrap;
	word-break: break-all;
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	color: ${({ theme }) => theme.PALETTE.gray[200]};
	border-top: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	padding: 12px 0 40px 0;
	width: 100%;

	@media screen and (min-width: 376px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}
`;

export const NextBox = styled.div`
	border-top: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	padding: 12px 8px;
	${flexColumn}
	gap: 12px;
`;

export const Next = styled.div`
	${flexCenter}
	justify-content: left;
	gap: 8px;
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	color: ${({ theme }) => theme.PALETTE.gray[200]};
	cursor: pointer;

	> div {
		height: 12px;
	}

	> span {
		font-weight: 500;
	}

	@media screen and (min-width: 376px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	}
`;

export const ButtonBox = styled.div`
	width: 100%;

	> div > button {
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	}

	@media screen and (min-width: 376px) {
		${flexCenter}
		justify-content: right;

		> div {
			width: 180px;

			> button {
				font-size: ${({ theme }) => theme.FONT_SIZE.ml};
			}
		}
	}
`;