import styled from 'styled-components';
import { flexCenter, flexColumn } from 'styles/common';

export const Body = styled.div`
	margin-top: 20px;
	${flexColumn}
	gap: 10px;

	@media screen and (min-width: 768px) {
		gap: 12px;
	}
`;

export const Word = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	color: ${({ theme }) => theme.PALETTE.gray[200]};
	padding: 4px 5px;
	border-radius: 4px;
	background-color: ${({ theme }) => theme.PALETTE.white[150]};

	@media screen and (min-width: 768px) {
		padding: 6px 7px;
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}
`;

export const HashTag = styled.div`
	${flexCenter}
	flex-wrap: wrap;
	justify-content: left;
	gap: 6px;
`;
