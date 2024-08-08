import styled, { css } from 'styled-components';
import {
	flexCenter,
	flexColumn,
	flexLeftCenter,
	flexSpaceBetweenCenter,
} from 'styles/common';

export const Body = styled.div`
	border-top: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	background-color: ${({ theme }) => theme.PALETTE.white[0]};
	padding: 24px 12px;
	${flexColumn}
	gap: 24px;

	@media screen and (min-width: 768px) {
		padding: 36px 24px;

		> div:last-child {
			${flexCenter}
			justify-content: right;

			> button {
				width: 180px;
			}
		}
	}

	@media screen and (min-width: 1200px) {
		padding: 60px 36px;

		> div:last-child {
			${flexCenter}
			justify-content: right;

			> button {
				width: 180px;
			}
		}
	}
`;

export const StatusBox = styled.div`
	${flexColumn}
	gap: 14px;

	@media screen and (min-width: 768px) {
		gap: 22px;
	}

	@media screen and (min-width: 768px) {
		gap: 26px;
	}
`;

export const Status = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.m};
	color: ${({ theme }) => theme.PALETTE.gray[300]};
	padding: 4px 8px;
	background-color: ${({ theme }) => theme.PALETTE.white[150]};
	width: 68px;
	border-radius: 8px;
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

export const ImgBox = styled.div`
	${flexSpaceBetweenCenter}
	position: relative;
`;

export const ImgLine = styled.div`
	position: absolute;
	height: 2px;
	width: 100%;
	right: 0;
	top: 15px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};

	@media screen and (min-width: 768px) {
		height: 3px;
		top: 30px;
		background-color: ${({ theme }) => theme.PALETTE.gray[0]};
	}

	@media screen and (min-width: 1200px) {
		height: 4px;
		top: 40px;
	}
`;

export const ImgStatus = styled.div`
	${flexColumn}
	align-items: center;
	gap: 5px;
	z-index: 1;

	& img {
		width: 30px;
	}

	& span {
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		color: ${({ theme }) => theme.PALETTE.gray[100]};
	}

	@media screen and (min-width: 768px) {
		gap: 8px;

		& img {
			width: 60px;
		}

		& span {
			font-size: ${({ theme }) => theme.FONT_SIZE.ml};
		}
	}

	@media screen and (min-width: 1200px) {
		& img {
			width: 80px;
		}

		& span {
			font-size: ${({ theme }) => theme.FONT_SIZE.ml};
		}
	}
`;

export const TableBox = styled.table`
	text-align: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	border-collapse: collapse;

	> tr {
		border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	}

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}

	@media screen and (min-width: 1200px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	}
`;

export const Th = styled.th`
	height: 26px;
	padding: 8px 0;
	background-color: ${({ theme }) => theme.PALETTE.white[150]};

	&:first-child {
		border-right: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	}

	@media screen and (min-width: 768px) {
		padding: 12px 0;
	}

	@media screen and (min-width: 1200px) {
		padding: 18px 0;
	}
`;

export const Td = styled.td`
	height: 24px;
	color: ${({ theme }) => theme.PALETTE.gray[200]};
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	padding: 8px 0;

	&:first-child {
		border-right: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	}

	& strong {
		font-weight: 500;
	}

	@media screen and (min-width: 768px) {
		padding: 12px 0;
	}

	@media screen and (min-width: 1200px) {
		padding: 18px 0;
	}
`;

export const TextBox = styled.div`
	${flexColumn}
	gap: 12px;
	position: relative;
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
	line-height: ${({ $adminFiles }) => ($adminFiles ? 'normal' : '25px')};

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

	> img,
	video {
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
	${flexCenter}
	gap: 4px;
	height: 10px;
	color: ${({ theme }) => theme.PALETTE.gray[100]};
	cursor: pointer;
	width: 64px;

	> p {
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	> img {
		width: 8px;
	}

	@media screen and (min-width: 768px) {
		height: 14px;
		gap: 6px;
		width: 100px;

		> p {
			font-size: ${({ theme }) => theme.FONT_SIZE.ms};
		}

		> img {
			width: 12px;
		}
	}

	@media screen and (min-width: 1200px) {
		height: 16px;
		width: 120px;

		> p {
			font-size: ${({ theme }) => theme.FONT_SIZE.m};
		}

		> img {
			width: 14px;
		}
	}
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
	top: 55%;
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	background-image: url('/assets/icons/left-arrow.svg');

	@media screen and (min-width: 768px) {
		left: -1.5%;
	}

	@media screen and (min-width: 1200px) {
		left: -0.7%;
	}
`;

export const RightArrowImg = styled.button`
	${buttonBgReset};
	z-index: 10;
	top: 55%;
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	left: 97.5%;
	background-image: url('/assets/icons/right-arrow.svg');

	@media screen and (min-width: 768px) {
		left: 98%;
	}

	@media screen and (min-width: 1200px) {
		left: 99.2%;
	}
`;
