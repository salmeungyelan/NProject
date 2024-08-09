import styled, { css } from 'styled-components';
import {
	flexCenter,
	flexColumn,
	flexColumnCenter,
	flexSpaceBetweenCenter,
	textOverflowEllipsis,
} from 'styles/common';

export const Iphone = styled.div`
	grid-area: iphone;
	border: 3px solid ${({ theme }) => theme.PALETTE.gray[300]};
	border-radius: 34px;
	overflow: hidden;
	width: 294px;

	> a,
	:visited {
		height: 235px;
		${flexColumn}
		gap: 14px;
		text-decoration: none;
	}

	@media screen and (min-width: 768px) {
		width: 203px;

		> a {
			height: 418px;
			gap: 18px;
		}
	}

	@media screen and (min-width: 1200px) {
		width: 262px;

		> a {
			height: 510px;
			gap: 20px;
		}
	}
`;

export const ImgBox = styled.div`
	${flexColumnCenter}
	min-height: 160px;
	position: relative;

	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	@media screen and (min-width: 768px) {
		min-height: 340px;
	}

	@media screen and (min-width: 1200px) {
		min-height: 400px;
	}
`;

export const Circle = styled.div`
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	border-radius: 11px;
	width: 56px;
	height: 16px;
	position: absolute;
	top: 8%;

	@media screen and (min-width: 768px) {
		top: 3%;
	}

	@media screen and (min-width: 1200px) {
		width: 72px;
		height: 20px;
		top: 3%;
	}
`;

export const MainBox = styled.div`
	padding: 0 16px;
	${flexColumn}
	gap: 12px;
	height: 120px;

	@media screen and (min-width: 768px) {
		gap: 16px;
	}

	@media screen and (min-width: 1200px) {
		gap: 20px;
	}
`;

export const Title = styled.div`
	${flexSpaceBetweenCenter}
	color: ${({ theme }) => theme.PALETTE.gray[300]};
	font-size: ${({ theme }) => theme.FONT_SIZE.m};
	font-weight: 600;
	gap: 10px;

	> div:first-child {
		${textOverflowEllipsis}
	}

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	}

	@media screen and (min-width: 1200px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.xxl};
	}
`;

export const Writer = styled(Title)`
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	color: ${({ theme }) => theme.PALETTE.gray[100]};

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	}

	@media screen and (min-width: 1200px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}
`;

const statusStyles = {
	REVIEW_STATUS_01: css`
		background: ${({ theme }) => theme.PALETTE.gray[100]};
	`,
	REVIEW_STATUS_02: css`
		background: ${({ theme }) => theme.PALETTE.blue};
	`,
	REVIEW_STATUS_03: css`
		background: ${({ theme }) => theme.PALETTE.orange[100]};
	`,
	REVIEW_STATUS_04: css`
		background: ${({ theme }) => theme.PALETTE.navy};
	`,
};

export const CheckProgress = styled.div`
	${flexCenter};

	${({ $status }) => statusStyles[$status]}
	color: ${({ theme }) => theme.PALETTE.white[100]};

	font-weight: 500;
	border-radius: 4px;

	width: 40px;
	height: 16px;
	font-size: ${({ theme }) => theme.FONT_SIZE.s};

	@media screen and (min-width: 768px) {
		width: 56px;
		height: 21px;
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	}

	@media screen and (min-width: 1200px) {
		width: 73px;
		height: 28px;
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}
`;

export const Rate = styled.div`
	${flexSpaceBetweenCenter}
	gap: 4px;

	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	color: ${({ theme }) => theme.PALETTE.gray[200]};

	> div > img {
		width: 8px;
	}

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};

		> div > img {
			width: 12px;
		}
	}
`;
