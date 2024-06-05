import styled from 'styled-components';
import { flexColumn, flexSpaceBetweenCenter } from 'styles/common';

export const Card = styled.div`
	width: 214px;
	height: 200px;
	box-shadow: 0 2px 4px 0 #00000029;
	${flexColumn}
	gap: 10px;

	> div > img {
		width: 100%;
		height: 130px;
	}
`;

export const MainBox = styled.div`
	padding: 0 16px;
	${flexColumn}
	gap: 8px;
`;

export const Title = styled.div`
	${flexSpaceBetweenCenter}
	color: ${({ theme }) => theme.PALETTE.gray[300]};
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-weight: 600;
`;

export const Writer = styled(Title)`
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	color: ${({ theme }) => theme.PALETTE.gray[100]};
`;
