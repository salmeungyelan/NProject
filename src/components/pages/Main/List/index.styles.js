import styled from 'styled-components';
import {
	flexCenter,
	flexColumn,
	flexColumnCenter,
	flexSpaceBetweenCenter,
} from 'styles/common';

export const Body = styled.div`
	display: ${({ $data }) => ($data ? 'grid' : 'flex')};
	flex-direction: ${({ $data }) => !$data && 'column'};
	grid-template-areas: ${({ $data }) =>
		$data &&
		`
    "iphone iphone iphone"
    "reviewIng reviewIng reviewIng"
    "reviewFin reviewFin reviewFin"
    `};
	gap: 24px 0;
	grid-auto-rows: auto;
	grid-auto-columns: auto;

	@media screen and (min-width: 768px) {
		grid-template-areas: 'iphone iphone reviewIng' 'iphone iphone reviewFin' 'iphone iphone reviewFin';
		gap: 20px 30px;
	}
`;

export const Iphone = styled.div`
	grid-area: iphone;
	width: 262px;
`;

export const ReviewIng = styled.div`
	grid-area: reviewIng;
	${flexColumn}
	gap: 12px;
`;

export const ReviewFin = styled(ReviewIng)`
	grid-area: reviewFin;
`;

export const Title = styled.div`
	display: flex;
	height: 27px;
	padding: 3px 7px;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.PALETTE.white[200]};
	width: fit-content;

	& a,
	:visited {
		${flexCenter};
		gap: 8px;
		text-decoration: none;
	}

	& span {
		font-weight: 600;
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
		color: ${({ theme }) => theme.PALETTE.gray[300]};
	}

	& img {
		width: 12px;
		height: 12px;
	}

	@media screen and (min-width: 768px) {
		& span {
			font-size: ${({ theme }) => theme.FONT_SIZE.ml};
		}

		height: 27px;
		padding: 5px 8px;
	}

	@media screen and (min-width: 1200px) {
		& span {
			font-size: ${({ theme }) => theme.FONT_SIZE.l};
		}

		height: 30px;
		padding: 7px 11px;
	}
`;

export const NoPost = styled.div`
	width: 100%;
	height: 133px;
	box-shadow: 0 2px 4px 0 #00000029;
	${flexColumnCenter}
	gap: 19px;

	> span {
		font-weight: 600;
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}

	& button {
		width: 100px;
	}

	@media screen and (min-width: 768px) {
		height: 150px;

		> span {
			font-size: ${({ theme }) => theme.FONT_SIZE.ml};
		}
	}

	@media screen and (min-width: 1200px) {
		height: 200px;
	}
`;

export const CardList = styled.div`
	margin-top: 12px;
	${flexSpaceBetweenCenter};
	gap: 8px;

	@media screen and (min-width: 768px) {
		gap: 10px;
	}
`;
