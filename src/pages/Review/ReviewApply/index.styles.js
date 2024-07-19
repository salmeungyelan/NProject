import styled, { css } from 'styled-components';
import {
	bodyContainer,
	flexCenter,
	flexColumn,
	flexLeftCenter,
} from 'styles/common';

export const Body = styled.div`
	${bodyContainer}
	${flexColumn}
  gap: 32px;
`;

export const Content = styled.div`
	${flexColumn}
	gap: 4px;

	@media screen and (min-width: 768px) {
		gap: 8px;
	}
`;

export const Box = styled(Content)`
	gap: 8px;

	> p {
		margin: -4px 0 0 0;
		height: 12px;
		font-size: ${({ theme }) => theme.FONT_SIZE.s};
		color: ${({ theme }) => theme.PALETTE.orange[100]};
	}

	@media screen and (min-width: 768px) {
		gap: 12px;

		> p {
			margin: -6px 0 0 0;
			height: 14px;
			font-size: ${({ theme }) => theme.FONT_SIZE.ms};
		}
	}
`;

export const Title = styled.span`
	font-weight: 500;
	font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	color: ${({ theme }) => theme.PALETTE.orange[100]};

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.l};
	}
`;

export const CategoryBox = styled.div`
	${flexLeftCenter}
	gap: 8px;
`;

export const Category = styled.div`
	padding: 5px 10px;
	color: ${({ theme, $clicked }) =>
		$clicked ? theme.PALETTE.orange[100] : theme.PALETTE.gray[100]};
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	border: 1px solid
		${({ theme, $clicked }) =>
			$clicked ? theme.PALETTE.orange[100] : theme.PALETTE.gray[0]};
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.PALETTE.orange[100]};
		border: 1px solid ${({ theme }) => theme.PALETTE.orange[100]};
	}

	@media screen and (min-width: 768px) {
		padding: 6px 14px;
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	}

	@media screen and (min-width: 1200px) {
		padding: 7px 16px;
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}
`;

export const WordBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	border-radius: 4px;
	gap: 6px;
	padding: 4px 8px;
	background-color: ${({ theme }) => theme.PALETTE.white[0]};

	@media screen and (min-width: 768px) {
		padding: 6px 10px;
	}
`;

export const Word = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.m};
	color: ${({ theme }) => theme.PALETTE.gray[200]};
	padding: 4px 6px;
	border-radius: 4px;
	background-color: ${({ theme }) => theme.PALETTE.white[150]};

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	}
`;

export const FileBox = styled.div`
	${flexColumn}
	gap: 6px;

	> span {
		line-height: 16px;
		font-size: ${({ theme }) => theme.FONT_SIZE.s};
		color: ${({ theme }) => theme.PALETTE.gray[200]};
	}

	> p {
		height: 10px;
		font-size: ${({ theme }) => theme.FONT_SIZE.s};
		color: ${({ theme }) => theme.PALETTE.orange[100]};
	}

	@media screen and (min-width: 768px) {
		& span,
		p {
			line-height: 18px;
			font-size: ${({ theme }) => theme.FONT_SIZE.ms};
		}

		> p {
			height: 12px;
		}
	}
`;

export const MediaFileBox = styled.div`
	${flexLeftCenter}
	gap: 8px;
	position: relative;
`;

export const FileContainer = styled.div`
	width: 64px;
	height: 78px;
	${flexColumn}
	gap: 4px;

	@media screen and (min-width: 768px) {
		width: 100px;
		height: 118px;
	}

	@media screen and (min-width: 1200px) {
		width: 120px;
		height: 140px;
	}
`;

export const HiddenFileInput = styled.input`
	display: none;
`;

export const CustomButton = styled.button`
	width: 64px;
	height: 64px;
	background-color: ${({ theme }) => theme.PALETTE.gray[0]};
	color: ${({ theme }) => theme.PALETTE.white};
	font-size: ${({ theme }) => theme.FONT_SIZE.m};
	cursor: pointer;

	> img {
		width: 28px;
	}

	@media screen and (min-width: 768px) {
		width: 100px;
		height: 100px;

		> img {
			width: 35px;
		}
	}

	@media screen and (min-width: 1200px) {
		width: 120px;
		height: 120px;

		> img {
			width: 40px;
		}
	}
`;

export const MediaList = styled.div`
	${flexCenter}
	justify-content: flex-start;
	gap: 4px;
	position: relative;
	overflow-x: scroll;
	overflow-y: hidden;

	@media screen and (min-width: 768px) {
		gap: 6px;
	}

	@media screen and (min-width: 1200px) {
		gap: 8px;
	}

	/* &::-webkit-scrollbar {
		display: inherit;
		height: 3px;

		@media screen and (min-width: 768px) {
			height: 5px;
		}
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 4px;
		background-color: ${({ theme }) => theme.PALETTE.gray[100]};
	}

	&::-webkit-scrollbar-track {
		background-color: rgba(0, 0, 0, 0.1);
	} */
`;

export const Media = styled.div`
	${flexColumn}
	gap: 4px;
	position: relative;
	transform: ${({ slide }) => `translateX(-${slide * 100}%)`};
`;

export const Img = styled.img`
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
`;

export const Video = styled.video`
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
`;

export const XBtn = styled.img`
	position: absolute;
	width: 10px;
	height: 10px;
	top: 5%;
	right: 7%;

	@media screen and (min-width: 768px) {
		width: 16px;
		height: 16px;
	}

	@media screen and (min-width: 1200px) {
		width: 16px;
		height: 16px;
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
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 54px;
		text-align: center;
	}

	> img {
		width: 8px;
	}

	@media screen and (min-width: 768px) {
		height: 14px;
		gap: 6px;

		> p {
			font-size: ${({ theme }) => theme.FONT_SIZE.s};
		}

		> img {
			width: 12px;
		}
	}

	@media screen and (min-width: 1200px) {
		height: 16px;

		> p {
			font-size: ${({ theme }) => theme.FONT_SIZE.ms};
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
	width: 24px;
	height: 11px;
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

export const ButtonBox = styled.div`
	${flexColumn}
	gap: 10px;

	> div {
		${flexColumn}
		gap: 12px;

		> div {
			${flexCenter}
			gap: 10px;
		}
	}

	@media screen and (min-width: 1200px) {
		> div {
			justify-content: space-between;
			flex-direction: row;

			> div {
				gap: 22px;
			}

			& button {
				width: 180px;
			}
		}
	}
`;

export const Check = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	color: ${({ theme }) => theme.PALETTE.orange[100]};

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
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
	left: 22%;

	@media screen and (min-width: 768px) {
		top: 35%;
		left: 17.5%;
	}

	@media screen and (min-width: 1200px) {
		top: 37%;
		left: 10%;
	}
`;

export const RightArrowImg = styled(LeftArrowImg)`
	left: 97%;
	background-image: url('/assets/icons/right-arrow.svg');

	@media screen and (min-width: 768px) {
		left: 98%;
	}

	@media screen and (min-width: 1200px) {
		left: 99%;
	}
`;
