import styled, { css } from 'styled-components';
import {
	flexCenter,
	flexColumn,
	flexLeftCenter,
	textOverflowEllipsis,
} from 'styles/common';

export const Body = styled.div`
	${flexColumn}
	gap: 12px;
	padding-top: 12px;
	border-top: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};

	@media screen and (min-width: 768px) {
		gap: 14px;
	}
`;

export const Box = styled.div`
	${flexColumn}
	gap: 8px;
	position: relative;

	@media screen and (min-width: 768px) {
		gap: 12px;
	}
`;

export const Title = styled.span`
	font-weight: 500;
	font-size: ${({ theme }) => theme.FONT_SIZE.m};
	color: ${({ theme }) => theme.PALETTE.orange[100]};

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.l};
	}
`;

export const ReadOnly = styled.pre`
	padding: 7px 10px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	border-radius: 4px;
	background-color: ${({ theme }) => theme.PALETTE.white[0]};
	color: ${({ theme }) => theme.PALETTE.gray[200]};
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	line-height: 25px;
	white-space: pre-wrap;
	word-break: break-all;
	overflow: auto;

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
		padding: 12px;
	}
`;

export const ReadImg = styled(ReadOnly)`
	padding: 8px 10px 7px 10px;
	line-height: normal;

	> div {
		${flexLeftCenter}
		gap: 8px;
		overflow: hidden;
	}

	@media screen and (min-width: 768px) {
		padding: 13px 12px 12px 12px;
	}
`;

export const Img = styled.div`
	${flexColumn}
	gap: 4px;
	position: relative;

	> img {
		width: 64px;
		height: 64px;
		object-fit: cover;

		@media screen and (min-width: 768px) {
			width: 100px;
			height: 100px;
		}

		@media screen and (min-width: 1200px) {
			width: 120px;
			height: 120px;
		}
	}
`;

export const ImgTitle = styled.div`
	${flexCenter};
	gap: 4px;
	height: 10px;
	color: ${({ theme }) => theme.PALETTE.gray[100]};
	cursor: pointer;
	width: 64px;

	> p {
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		${textOverflowEllipsis}
		text-align: center;
	}

	& img {
		width: 10%;
	}

	@media screen and (min-width: 768px) {
		height: 14px;
		width: 100px;
		gap: 6px;

		& p {
			font-size: ${({ theme }) => theme.FONT_SIZE.ms};
		}

		& img {
			width: 12%;
		}
	}

	@media screen and (min-width: 1200px) {
		height: 16px;
		width: 120px;

		> p {
			font-size: ${({ theme }) => theme.FONT_SIZE.m};
			width: 85px;
		}
	}
`;

export const RatingBox = styled(Box)`
	> div {
		${flexColumn}
		gap: 8px;

		@media screen and (min-width: 768px) {
			justify-content: space-between;
			flex-direction: row;

			& button {
				width: 180px;
			}
		}
	}
`;

export const Rate = styled.div`
	${flexLeftCenter}
	gap: 6px;
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	color: ${({ theme }) => theme.PALETTE.gray[200]};
	font-weight: 400;

	& img {
		width: 12px;
	}

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};

		& img {
			width: 16px;
		}
	}

	@media screen and (min-width: 1200px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};

		& img {
			width: 18px;
		}
	}
`;

export const RateNotice = styled.p`
	margin-top: 4px;
	font-weight: 400;
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	color: ${({ theme }) => theme.PALETTE.red[100]};
`;

const buttonBgReset = css`
	background: none;
	width: 12px;
	height: 12px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: 8px 8px;
	border-radius: 50%;
	box-shadow: 0 0 4px 0 #00000029;
	background-repeat: 0;
	position: absolute;

	@media screen and (min-width: 768px) {
		width: 18px;
		height: 18px;
		background-size: 12px 12px;
	}
`;

export const LeftArrowImg = styled.button`
	${buttonBgReset};
	z-index: 10;
	left: -2%;
	top: 50%;
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	background-image: url('/assets/icons/left-arrow.svg');

	@media screen and (min-width: 768px) {
		left: -1%;
	}

	@media screen and (min-width: 1200px) {
		left: -0.5%;
	}
`;

export const RightArrowImg = styled.button`
	${buttonBgReset};
	z-index: 10;
	top: 50%;
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	left: 98%;
	background-image: url('/assets/icons/right-arrow.svg');

	@media screen and (min-width: 768px) {
		left: 98.5%;
	}

	@media screen and (min-width: 1200px) {
		left: 99.5%;
	}
`;
