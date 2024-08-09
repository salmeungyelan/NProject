import styled from 'styled-components';
import {
	flexColumn,
	flexSpaceBetweenCenter,
	textOverflowEllipsis,
} from 'styles/common';

export const Card = styled.div`
	width: 143px;
	height: 133px;
	box-shadow: 0 0 4px 0 #00000029;
	transition: all 1s linear;

	> a,
	:visited {
		${flexColumn}
		gap: 6px;
		text-decoration: none;
	}

	> a > div > img,
	video {
		width: 100%;
		height: 78px;
		object-fit: cover;
	}

	@media screen and (min-width: 768px) {
		width: ${({ $isReview }) => ($isReview ? '182px' : '162px')};
		height: ${({ $isReview }) => ($isReview ? '182px' : '172px')};

		> a {
			gap: 6px;
		}

		> a > div > img,
		video {
			width: 100%;
			height: 110px;
		}
	}

	@media screen and (min-width: 1200px) {
		width: ${({ $isReview }) => ($isReview ? '228px' : '210px')};
		height: ${({ $isReview }) => ($isReview ? '213px' : '200px')};

		> a {
			gap: 8px;
		}

		> a > div > img,
		video {
			width: 100%;
			height: ${({ $isReview }) => ($isReview ? '130px' : '135px')};
		}
	}
`;

export const MainBox = styled.div`
	padding: 0 10px;
	${flexColumn}
	gap: 10px;

	@media screen and (min-width: 768px) {
		padding: 0 16px;
		gap: 12px;
	}
`;

export const Title = styled.div`
	${flexSpaceBetweenCenter}
	gap: 4px;
	color: ${({ theme }) => theme.PALETTE.gray[300]};
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	font-weight: 600;

	> div:first-child {
		width: ${({ $isReview }) => ($isReview ? '70%' : '78px')};
		${textOverflowEllipsis}
	}

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
		gap: 6px;

		> div:first-child {
			width: ${({ $isReview }) => ($isReview ? '70%' : '84px')};
		}
	}

	@media screen and (min-width: 1200px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
		gap: 10px;

		> div:first-child {
			width: ${({ $isReview }) => ($isReview ? '70%' : '122px')};
		}
	}
`;

export const Writer = styled(Title)`
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	color: ${({ theme }) => theme.PALETTE.gray[100]};

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	}

	@media screen and (min-width: 1200px) {
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
			width: 10px;
		}
	}

	@media screen and (min-width: 1200px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};

		> div > img {
			width: 12px;
		}
	}
`;
