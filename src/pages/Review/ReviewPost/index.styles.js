import styled, { css } from 'styled-components';
import {
	bodyContainer,
	flexCenter,
	flexColumn,
	flexSpaceBetweenCenter,
} from 'styles/common';

export const Body = styled.div`
	${bodyContainer}
	${flexColumn}
  gap: 32px;
`;

export const Content = styled.div`
	${flexColumn}
	gap: 12px;

	@media screen and (min-width: 768px) {
		gap: 16px;
	}
`;

export const Info = styled.div`
	${flexColumn}
	gap: 10px;
`;

export const InfoMain = styled.div`
	${flexCenter}
	justify-content: left;
	gap: 6px;

	@media screen and (min-width: 768px) {
		gap: 8px;
	}
`;

export const Category = styled.div`
	color: ${({ theme }) => theme.PALETTE.orange[100]};
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	border: 1px solid ${({ theme }) => theme.PALETTE.orange[100]};
	padding: 4px 12px;
	border-radius: 26px;

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
		padding: 6px 16px;
	}
`;

export const Title = styled.span`
	color: ${({ theme }) => theme.PALETTE.orange[100]};
	font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	font-weight: 500;

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.j};
	}
`;

export const InfoSub = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 4px;

	color: ${({ theme }) => theme.PALETTE.gray[300]};

	> div:first-child {
		font-size: ${({ theme }) => theme.FONT_SIZE.s};
	}

	> div:last-child {
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	}

	@media screen and (min-width: 768px) {
		${flexSpaceBetweenCenter}

		> div:first-child {
			font-size: ${({ theme }) => theme.FONT_SIZE.ml};
		}

		> div:last-child {
			font-size: ${({ theme }) => theme.FONT_SIZE.ms};
		}
	}
`;

export const Description = styled.div`
	width: 100%;
	padding: 12px 0;
	border-top: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};

	${({ $isList }) =>
		$isList
			? css`
					border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
			  `
			: css`
					border-bottom: none;
			  `}

	> pre {
		line-height: 22px;
		white-space: pre-wrap;
		word-break: break-all;
		color: ${({ theme }) => theme.PALETTE.gray[200]};
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	}

	@media screen and (min-width: 768px) {
		padding: 16px 0;

		> pre {
			font-size: ${({ theme }) => theme.FONT_SIZE.m};
		}
	}
`;

export const DesTitle = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.m};
	color: ${({ theme }) => theme.PALETTE.orange[100]};
	margin-bottom: 4px;
	font-weight: 500;

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	}
`;

export const ButtonBox = styled.div`
	${flexColumn}
	gap: 12px;
	width: 100%;

	@media screen and (min-width: 768px) {
		${flexCenter}
		justify-content: right;
		flex-direction: row;

		> div {
			width: 180px;
		}
	}
`;
