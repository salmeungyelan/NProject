import styled from 'styled-components';
import { flexColumn, flexSpaceBetweenCenter } from 'styles/common';

export const Card = styled.div`
	width: 143px;
	height: 133px;
	box-shadow: 0 2px 4px 0 #00000029;
	${flexColumn}
	gap: 6px;

	> div > img {
		width: 100%;
		height: 88px;
	}

	@media screen and (min-width: 376px) {
		width: 162px;
		height: 151px;
		gap: 8px;

		> div > img {
			width: 100%;
			height: 100px;
		}
	}

	@media screen and (min-width: 769px) {
		width: 214px;
		height: 200px;
		gap: 10px;

		> div > img {
			width: 100%;
			height: 130px;
		}
	}
`;

export const MainBox = styled.div`
	padding: 0 10px;
	${flexColumn}
	gap: 4px;

	@media screen and (min-width: 376px) {
		padding: 0 16px;
		gap: 6px;
	}

	@media screen and (min-width: 769px) {
		padding: 0 16px;
		gap: 8px;
	}
`;

export const Title = styled.div`
	${flexSpaceBetweenCenter}
	color: ${({ theme }) => theme.PALETTE.gray[300]};
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	font-weight: 600;

	@media screen and (min-width: 376px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	}
`;

export const Writer = styled(Title)`
	font-size: ${({ theme }) => theme.FONT_SIZE.es};
	color: ${({ theme }) => theme.PALETTE.gray[100]};

	@media screen and (min-width: 376px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	}
`;
