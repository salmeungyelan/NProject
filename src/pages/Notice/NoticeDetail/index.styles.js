import styled from 'styled-components';
import {
	bodyContainer,
	flexColumn,
	flexAlignCenter,
	flexCenter,
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
	${flexAlignCenter}
	gap: 6px;

	> img {
		width: 18px;
	}

	@media screen and (min-width: 768px) {
		gap: 8px;

		> img {
			width: 25px;
		}
	}
`;

export const Important = styled.div`
	width: 36px;
	height: 18px;
	${flexCenter}
	background-color: ${({ theme }) => theme.PALETTE.orange[100]};
	color: ${({ theme }) => theme.PALETTE.white[100]};
	border-radius: 26px;
	font-weight: 500;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};

	@media screen and (min-width: 768px) {
		width: 50px;
		height: 25px;
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	}
`;

export const Title = styled.span`
	font-weight: 500;
	font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	color: ${({ theme }) => theme.PALETTE.gray[300]};

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.j};
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
