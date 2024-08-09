import styled from 'styled-components';
import {
	bodyContainer,
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
	width: 100%;
	height: auto;

	@media screen and (min-width: 768px) {
		gap: 18px;
	}
`;

export const TitleBox = styled.div`
	display: inline-table;
	gap: 6px;
	line-height: 24px;

	> img {
		width: 18px;
		display: inline-block;
		vertical-align: middle;
		margin-right: 6px;

		@media screen and (min-width: 768px) {
			width: 25px;
			margin-right: 8px;
			vertical-align: middle;
		}
	}
`;

export const Important = styled.div`
	width: 36px;
	height: 18px;
	display: inline-flex;
	background-color: ${({ theme }) => theme.PALETTE.orange[100]};
	color: ${({ theme }) => theme.PALETTE.white[100]};
	border-radius: 26px;
	font-weight: 500;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	line-height: 24px;
	text-align: center;
	vertical-align: middle;
	flex-direction: column;
	justify-content: center;
	margin-right: 6px;

	@media screen and (min-width: 768px) {
		width: 50px;
		height: 25px;
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
		line-height: 32px;
		margin-right: 8px;
		vertical-align: middle;
	}
`;

export const Title = styled.span`
	font-weight: 500;
	/* display: inline-flex; */
	font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	color: ${({ theme }) => theme.PALETTE.gray[300]};
	line-height: 24px;

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.j};
		line-height: 32px;
		vertical-align: middle;
	}
`;

export const Info = styled.div`
	${flexSpaceBetweenCenter}
	color: ${({ theme }) => theme.PALETTE.gray[300]};

	> span {
		font-size: ${({ theme }) => theme.FONT_SIZE.s};
	}

	> p {
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	}

	@media screen and (min-width: 768px) {
		> span {
			font-size: ${({ theme }) => theme.FONT_SIZE.ml};
		}

		> p {
			font-size: ${({ theme }) => theme.FONT_SIZE.ms};
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

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}
`;
