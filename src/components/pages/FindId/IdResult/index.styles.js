import styled from 'styled-components';
import { flexColumn } from 'styles/common';

export const Body = styled.div`
	width: 320px;
	${flexColumn}
	gap: 80px;

	> div {
		${flexColumn}
		gap: 22px;
	}
`;

export const InputBox = styled.div`
	width: 100%;
	${flexColumn}
	gap: 16px;
`;

export const Title = styled.h1`
	font-weight: 400;
	font-size: ${({ theme }) => theme.FONT_SIZE.re};
	color: ${({ theme }) => theme.PALETTE.orange[100]};
`;
