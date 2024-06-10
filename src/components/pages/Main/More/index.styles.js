import styled from 'styled-components';
import { flexCenter, flexColumn, flexSpaceBetweenCenter } from 'styles/common';

export const Body = styled.div`
	width: 294px;
	${flexColumn}
	gap: 15px;
	flex: 1 1 100%;
	box-sizing: border-box;

	@media screen and (min-width: 376px) {
		width: 568px;
	}

	@media screen and (min-width: 769px) {
		flex: 1 1 calc(50% - 23px);
		width: 589px;
	}
`;

export const TitleBox = styled.div`
	${flexSpaceBetweenCenter}
`;

export const Title = styled.div`
	color: ${({ theme }) => theme.PALETTE.gray[300]};
	font-size: ${({ theme }) => theme.FONT_SIZE.m};
	font-weight: 600;

	@media screen and (min-width: 386px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.xj};
	}
`;

export const MoreClick = styled.div`
	color: ${({ theme }) => theme.PALETTE.navy};
	font-size: ${({ theme }) => theme.FONT_SIZE.m};
	font-weight: 400;
	cursor: pointer;
`;

export const List = styled.div`
	${flexColumn}
	gap: 10px;
`;

export const Commons = styled.div`
	${flexSpaceBetweenCenter}
`;

export const ListTitle = styled.div`
	font-weight: 400;
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	color: ${({ theme }) => theme.PALETTE.gray[200]};

	@media screen and (min-width: 386px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	}
`;

export const Date = styled(ListTitle)`
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	color: ${({ theme }) => theme.PALETTE.gray[100]};

	@media screen and (min-width: 386px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}
`;

export const Important = styled(Commons)`
	& img {
		width: 15px;
	}

	> div:first-child {
		${flexCenter}
		gap: 6px;
	}
`;

export const ImportantBtn = styled.div`
	width: 28px;
	height: 14px;
	text-align: center;
	${flexCenter}
	background-color: ${({ theme }) => theme.PALETTE.orange[100]};
	color: ${({ theme }) => theme.PALETTE.white[100]};
	border-radius: 15px;
	font-weight: 500;
	font-size: ${({ theme }) => theme.FONT_SIZE.ss};

	@media screen and (min-width: 376px) {
		width: 41px;
		height: 20px;
		font-size: ${({ theme }) => theme.FONT_SIZE.s};
	}
`;
