import styled from 'styled-components';
import {
	flexColumn,
	flexLeftCenter,
	flexSpaceBetweenCenter,
} from 'styles/common';

export const Body = styled.div`
	${flexColumn}
	gap: 12px;
`;

export const FilterBox = styled.div`
	${flexSpaceBetweenCenter}
`;

export const ListBox = styled.div`
	> div:last-child {
		border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	}
`;

export const List = styled.div`
	${flexColumn}
	gap: 6px;
	border-top: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	padding: 12px 0;
	position: relative;
	cursor: pointer;

	> div {
		${flexLeftCenter}
		gap: 6px;
	}

	@media screen and (min-width: 768px) {
		gap: 8px;

		> div {
			gap: 12px;
		}
	}
`;

export const CoName = styled.span`
	font-size: ${({ theme }) => theme.FONT_SIZE.m};
	color: ${({ theme }) => theme.PALETTE.gray[300]};

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	}

	@media screen and (min-width: 1200px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.l};
	}
`;

export const Date = styled(CoName)`
	color: ${({ theme }) => theme.PALETTE.gray[100]};
`;

export const DownBtn = styled.img`
	position: absolute;
	width: 12px;
	top: 45%;
	left: 95%;

	@media screen and (min-width: 768px) {
		width: 16px;
		left: 95%;
	}

	@media screen and (min-width: 1200px) {
		width: 18px;
		left: 98%;
	}
`;
