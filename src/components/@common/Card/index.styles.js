import styled from 'styled-components';
import { flexColumn, flexSpaceBetweenCenter } from 'styles/common';

export const Card = styled.div`
	width: 143px;
	height: 133px;
	box-shadow: 0 2px 4px 0 #00000029;

	> a,
	:visited {
		${flexColumn}
		gap: 6px;
		text-decoration: none;
	}

	> a > div > img {
		width: 100%;
		height: 78px;
	}

	@media screen and (min-width: 768px) {
		width: 162px;
		height: 151px;

		> a {
			gap: 10px;
		}

		> a > div > img {
			width: 100%;
			height: 85px;
		}
	}

	@media screen and (min-width: 1200px) {
		width: 214px;
		height: 200px;

		> a {
			gap: 15px;
		}

		> a > div > img {
			width: 100%;
			height: 120px;
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

	@media screen and (min-width: 1200px) {
		padding: 0 16px;
		gap: 14px;
	}
`;

export const Title = styled.div`
	${flexSpaceBetweenCenter}
	color: ${({ theme }) => theme.PALETTE.gray[300]};
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	font-weight: 600;

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}

	@media screen and (min-width: 1200px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	}
`;

export const Writer = styled(Title)`
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	color: ${({ theme }) => theme.PALETTE.gray[100]};

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	}

	@media screen and (min-width: 768px) {
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

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};

		> div > img {
			width: 12px;
		}
	}
`;
