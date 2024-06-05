import styled from 'styled-components';
import {
	flexColumn,
	flexColumnCenter,
	flexSpaceBetweenCenter,
} from 'styles/common';

export const Iphone = styled.div`
	grid-area: iphone;
	width: 262px;
	height: 100%;
	border: 3px solid ${({ theme }) => theme.PALETTE.gray[300]};
	border-radius: 34px;
	${flexColumn}
	gap: 20px;
`;

export const ImgBox = styled.div`
	${flexColumnCenter}
	display: inline-flex;

	> img {
		width: 100%;
		height: auto;
	}
`;

export const MainBox = styled.div`
	padding: 0 16px;
	${flexColumn}
	gap: 10px;
`;

export const Title = styled.div`
	${flexSpaceBetweenCenter}
	color: ${({ theme }) => theme.PALETTE.gray[300]};
	font-size: ${({ theme }) => theme.FONT_SIZE.lg};
	font-weight: 600;
`;

export const Writer = styled(Title)`
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	color: ${({ theme }) => theme.PALETTE.gray[100]};
`;
