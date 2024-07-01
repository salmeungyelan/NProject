import styled from 'styled-components';
import { flexCenter, flexColumn, flexSpaceBetweenCenter } from 'styles/common';

export const MediaList = styled.div`
	${flexSpaceBetweenCenter}
	justify-content: flex-start;
	gap: 8px;
	overflow-x: auto;
	overflow-y: hidden;
`;

export const Media = styled.div`
	${flexColumn}
	gap: 4px;
	position: relative;

	> img,
	video {
		border: ${({ $thumbnail, theme }) =>
			$thumbnail ? `2px solid ${theme.PALETTE.navy}` : 'none'};

		width: 64px;
		height: 64px;
		object-fit: cover;

		@media screen and (min-width: 768px) {
			width: 100px;
			height: 100px;
			border: ${({ $thumbnail, theme }) =>
				$thumbnail ? `4px solid ${theme.PALETTE.navy}` : 'none'};
		}

		@media screen and (min-width: 1200px) {
			width: 120px;
			height: 120px;
			border: ${({ $thumbnail, theme }) =>
				$thumbnail ? `4px solid ${theme.PALETTE.navy}` : 'none'};
		}
	}
`;

export const MediaTitle = styled.div`
	${flexCenter}
	gap: 4px;
	height: 10px;
	color: ${({ theme }) => theme.PALETTE.gray[100]};
	cursor: pointer;

	> p {
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		width: 40px;
	}

	> img {
		width: 8px;
	}

	@media screen and (min-width: 768px) {
		height: 14px;
		gap: 6px;

		> p {
			font-size: ${({ theme }) => theme.FONT_SIZE.ms};
			width: 50px;
		}

		> img {
			width: 12px;
		}
	}

	@media screen and (min-width: 1200px) {
		height: 16px;

		> p {
			font-size: ${({ theme }) => theme.FONT_SIZE.m};
			width: 60px;
		}

		> img {
			width: 14px;
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
