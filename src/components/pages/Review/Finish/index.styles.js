import styled from 'styled-components';
import { flexCenter, flexColumn, flexLeftCenter } from 'styles/common';

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

export const ReadOnly = styled.div`
	padding: 7px 10px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	border-radius: 4px;
	background-color: ${({ theme }) => theme.PALETTE.white[0]};
	color: ${({ theme }) => theme.PALETTE.gray[200]};
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	line-height: 18px;

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
		padding: 12px;
	}
`;

export const ReadImg = styled(ReadOnly)`
	line-height: 0px;
	${flexLeftCenter}
	gap: 8px;
	overflow-x: scroll;
	overflow-y: hidden;
	box-sizing: border-box;

	@media screen and (min-width: 768px) {
		padding: 12px;
	}
`;

export const Img = styled.div`
	${flexColumn}
	gap: 4px;
	position: relative;

	> img {
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

export const ImgTitle = styled.div`
	${flexCenter}
	gap: 4px;
	height: 10px;
	color: ${({ theme }) => theme.PALETTE.gray[100]};
	cursor: pointer;

	> p {
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	}

	> img {
		width: 8px;
	}

	@media screen and (min-width: 768px) {
		height: 14px;
		gap: 6px;

		> p {
			font-size: ${({ theme }) => theme.FONT_SIZE.ms};
		}

		> img {
			width: 12px;
		}
	}

	@media screen and (min-width: 1200px) {
		height: 16px;

		> p {
			font-size: ${({ theme }) => theme.FONT_SIZE.m};
		}

		> img {
			width: 14px;
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
