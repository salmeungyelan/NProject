import styled from 'styled-components';
import { flexCenter, flexColumn, flexSpaceBetweenCenter } from 'styles/common';

export const Body = styled.div`
	border-top: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	background-color: ${({ theme }) => theme.PALETTE.white[0]};

	padding: 24px 12px;
	${flexColumn}
	gap: 24px;

	@media screen and (min-width: 768px) {
		padding: 36px 24px;
	}

	@media screen and (min-width: 1200px) {
		padding: 60px 36px;
	}
`;

export const StatusBox = styled.div`
	${flexColumn}
	gap: 14px;

	@media screen and (min-width: 768px) {
		gap: 22px;
	}

	@media screen and (min-width: 768px) {
		gap: 26px;
	}
`;

export const Status = styled.p`
	font-size: ${({ theme }) => theme.FONT_SIZE.m};
	color: ${({ theme }) => theme.PALETTE.gray[300]};
	padding: 4px 8px;
	background-color: ${({ theme }) => theme.PALETTE.white[150]};
	width: 68px;
	border-radius: 4px;
	font-weight: 600;
	text-align: center;

	@media screen and (min-width: 768px) {
		width: 86px;
		padding: 6px 10px;
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	}

	@media screen and (min-width: 1200px) {
		width: 92px;
		font-size: ${({ theme }) => theme.FONT_SIZE.l};
	}
`;

export const ImgBox = styled.div`
	${flexSpaceBetweenCenter}
	position: relative;
`;

export const ImgLine = styled.div`
	position: absolute;
	height: 2px;
	width: 100%;
	right: 0;
	top: 15px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};

	@media screen and (min-width: 768px) {
		height: 3px;
		top: 30px;
		background-color: ${({ theme }) => theme.PALETTE.gray[0]};
	}

	@media screen and (min-width: 1200px) {
		height: 4px;
		top: 40px;
	}
`;

export const ImgStatus = styled.div`
	${flexColumn}
	align-items: center;
	gap: 5px;
	z-index: 1;

	& img {
		width: 30px;
	}

	& span {
		font-size: ${({ theme }) => theme.FONT_SIZE.xs};
		color: ${({ theme }) => theme.PALETTE.gray[100]};
	}

	@media screen and (min-width: 768px) {
		gap: 8px;

		& img {
			width: 60px;
		}

		& span {
			font-size: ${({ theme }) => theme.FONT_SIZE.ml};
		}
	}

	@media screen and (min-width: 1200px) {
		& img {
			width: 80px;
		}

		& span {
			font-size: ${({ theme }) => theme.FONT_SIZE.ml};
		}
	}
`;

export const TableBox = styled.table`
	text-align: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	border-collapse: collapse;

	> thead,
	> tbody {
		border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	}

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}

	@media screen and (min-width: 1200px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	}
`;

export const Th = styled.th`
	height: 26px;
	padding: 8px 0;
	background-color: ${({ theme }) => theme.PALETTE.white[150]};

	&:first-child {
		border-right: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	}

	@media screen and (min-width: 768px) {
		padding: 12px 0;
	}

	@media screen and (min-width: 1200px) {
		padding: 18px 0;
	}
`;

export const Td = styled.td`
	height: 24px;
	color: ${({ theme }) => theme.PALETTE.gray[200]};
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	padding: 8px 0;

	&:first-child {
		border-right: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	}

	& strong {
		font-weight: 500;
	}

	@media screen and (min-width: 768px) {
		padding: 12px 0;
	}

	@media screen and (min-width: 1200px) {
		padding: 18px 0;
	}
`;

export const ButtonBox = styled.div`
	${flexColumn}
	gap: 10px;

	@media screen and (min-width: 768px) {
		${flexCenter}
		justify-content: right;
		flex-direction: row;
		gap: 10px;

		> button {
			width: 180px;
		}
	}
`;
