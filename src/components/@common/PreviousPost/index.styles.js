import styled from 'styled-components';
import { flexCenter, flexColumn } from 'styles/common';

export const NextBox = styled.div`
	border-top: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	padding: 12px 8px;
	${flexColumn}
	gap: 12px;
`;

export const Next = styled.div`
	${flexCenter}
	justify-content: left;
	gap: 8px;
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	color: ${({ theme }) => theme.PALETTE.gray[200]};
	cursor: pointer;

	& a,
	:visited {
		text-decoration: none;
		color: ${({ theme }) => theme.PALETTE.gray[200]};
	}

	& div {
		height: 12px;
	}

	& span {
		font-weight: 500;
	}

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	}
`;
