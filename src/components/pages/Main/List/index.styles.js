import styled from 'styled-components';
import { flexCenter, flexSpaceBetweenCenter } from 'styles/common';

export const Body = styled.div`
	display: grid;
	grid-template-areas: 'iphone iphone iphone' 'reviewIng reviewIng reviewIng' 'reviewFin reviewFin reviewFin';
	gap: 24px 0;
	grid-auto-rows: auto;
	grid-auto-columns: auto;

	@media screen and (min-width: 376px) {
		grid-template-areas: 'iphone iphone reviewIng' 'iphone iphone reviewFin' 'iphone iphone reviewFin';
		gap: 20px 40px;
	}
`;

export const Iphone = styled.div`
	grid-area: iphone;
	width: 262px;
`;

export const ReviewIng = styled.div`
	grid-area: reviewIng;
`;

export const ReviewFin = styled(ReviewIng)`
	grid-area: reviewFin;
`;

export const Title = styled.div`
	${flexCenter}
	display: inline-flex;
	gap: 8px;
	height: 27px;
	padding: 3px 7px;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.PALETTE.white[200]};

	& span {
		font-weight: 600;
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}

	& img {
		width: 12px;
		height: 12px;
	}

	@media screen and (min-width: 376px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
		height: 27px;
		padding: 5px 8px;
	}

	@media screen and (min-width: 769px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.l};
		height: 30px;
		padding: 7px 11px;
	}
`;

export const CardList = styled.div`
	margin-top: 12px;
	${flexSpaceBetweenCenter};
	gap: 14px;
`;
