import styled, { css } from 'styled-components';
import { flexCenter, flexColumn } from 'styles/common';

export const Background = styled.div`
	position: relative;
`;

export const MediaList = styled.div`
	${flexCenter}
	justify-content: flex-start;
	gap: 8px;
	overflow-x: scroll;
	overflow-y: hidden;
	padding-bottom: 3px;

	@media screen and (min-width: 768px) {
		padding-bottom: 5px;
	}

	@media screen and (min-width: 1200px) {
		padding-bottom: 7px;
	}
`;

export const Media = styled.div`
	${flexColumn}
	gap: 4px;
	position: relative;

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

export const MediaTitle = styled.div`
	display: flex;
	justify-content: center;
	gap: 4px;
	height: 10px;
	color: ${({ theme }) => theme.PALETTE.gray[100]};
	cursor: pointer;

	> p {
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: center;
		width: 50px;
	}

	& img {
		width: 10%;
	}

	@media screen and (min-width: 768px) {
		height: 14px;
		gap: 6px;

		& p {
			font-size: ${({ theme }) => theme.FONT_SIZE.ms};
			width: 70px;
		}

		& img {
			width: 12%;
		}
	}

	@media screen and (min-width: 1200px) {
		height: 16px;

		> p {
			font-size: ${({ theme }) => theme.FONT_SIZE.m};
			width: 85px;
		}
	}
`;

export const Thumbnail = styled.div`
	${flexCenter}
	gap: 2px;
	font-size: ${({ theme }) => theme.FONT_SIZE.xxs};
	position: absolute;
	background-color: ${({ theme }) => theme.PALETTE.navy};
	width: 28px;
	height: 14px;
	color: ${({ theme }) => theme.PALETTE.white[100]};
	top: 5%;
	left: 7%;

	> img {
		width: 4px;
		height: 5px;
	}

	@media screen and (min-width: 768px) {
		gap: 3px;
		width: 38px;
		height: 18px;

		> span {
			font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		}

		> img {
			width: 7px;
			height: 8px;
		}
	}

	@media screen and (min-width: 1200px) {
		gap: 3px;
		width: 46px;
		height: 20px;

		> span {
			font-size: ${({ theme }) => theme.FONT_SIZE.s};
		}

		> img {
			width: 8px;
			height: 10px;
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
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	border-radius: 50%;
	box-shadow: 0 0 4px 0 #00000029;

	@media screen and (min-width: 768px) {
		width: 18px;
		height: 18px;
		background-size: 12px 12px;
	}
`;

export const LeftArrowImg = styled.button`
	${buttonBgReset}
	background-image: url('/assets/icons/left-arrow.svg');
	z-index: 20;

	background-repeat: 0;
	position: absolute;
	top: 32.5%;
	left: -1.5%;

	@media screen and (min-width: 768px) {
		top: 34%;
	}

	@media screen and (min-width: 1200px) {
		top: 36%;
		left: -0.8%;
	}
`;

export const RightArrowImg = styled(LeftArrowImg)`
	left: 98%;
	background-image: url('/assets/icons/right-arrow.svg');

	@media screen and (min-width: 1200px) {
		left: 99.3%;
	}
`;
