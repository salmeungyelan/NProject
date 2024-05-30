import styled from 'styled-components';
import { bodyContainer, flexCenter, flexColumnCenter } from 'styles/common';

export const Body = styled.div`
	height: 100vh;
	${bodyContainer}
	${flexColumnCenter}
  gap: 32px;
	color: ${({ theme }) => theme.PALETTE.gray[200]};
`;

export const Top = styled.div`
	${flexColumnCenter}
	gap: 32px;
	text-align: center;
`;

export const ImgBox = styled.div`
	> img {
		width: 200px;
		height: 120px;
	}
`;

export const Title = styled.div`
	margin-bottom: 16px;
	font-size: ${({ theme }) => theme.FONT_SIZE.re};
	font-weight: 500;
`;

export const Content = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	line-height: 24px;
`;

export const ButtonBox = styled.div`
	${flexCenter};
	gap: 16px;
`;
