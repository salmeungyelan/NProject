import styled from 'styled-components';
import { flexCenter, flexColumn, flexSpaceBetweenCenter } from 'styles/common';

export const Body = styled.div`
	width: 294px;
	${flexColumn}
	gap: 15px;
	flex: 1 1 100%;
	box-sizing: border-box;

	@media screen and (min-width: 768px) {
		width: 568px;
	}

	@media screen and (min-width: 1200px) {
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
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.l};
	}
`;

export const MoreClick = styled.div`
	color: ${({ theme }) => theme.PALETTE.navy};
	font-size: ${({ theme }) => theme.FONT_SIZE.m};
	font-weight: 400;
	cursor: pointer;

	a:link,
	a:visited {
		color: ${({ theme }) => theme.PALETTE.navy};
		text-decoration: none;
	}
`;

export const List = styled.div`
	${flexColumn}
	gap: 10px;
`;

export const Commons = styled.div`
	> a,
	:visited {
		text-decoration: none;
		${flexSpaceBetweenCenter}
		gap: 10px;
	}
`;

export const ListTitle = styled.div`
	font-weight: 400;
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	color: ${({ theme }) => theme.PALETTE.gray[200]};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 65%;

	@media screen and (min-width: 768px) {
		width: 77%;
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	}
`;

export const ImpTitle = styled(ListTitle)`
	width: 100%;
`;

export const Date = styled(ListTitle)`
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	color: ${({ theme }) => theme.PALETTE.gray[100]};
	text-align: center;
	width: 30%;

	@media screen and (min-width: 768px) {
		width: 18%;
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}
`;

export const Important = styled(Commons)`
	${flexSpaceBetweenCenter}

	& img {
		width: 15px;
	}

	> a {
		display: flex;
		align-items: center;
		width: 65%;
		gap: 4px;

		@media screen and (min-width: 768px) {
			width: 77%;
			gap: 5px;
		}
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
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};

	@media screen and (min-width: 768px) {
		width: 41px;
		height: 20px;
		font-size: ${({ theme }) => theme.FONT_SIZE.s};
	}
`;

export const NoData = styled.div`
	${flexCenter}
	width: 100%;
	height: 106px;
	font-size: ${({ theme }) => theme.FONT_SIZE.m};
	font-weight: 500;

	@media screen and (min-width: 768px) {
		height: 128px;
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	}
`;
