import styled from 'styled-components';
import { bodyContainer, flexCenter, flexColumn } from 'styles/common';

export const Body = styled.div`
	${bodyContainer}
	${flexColumn}
  gap: 32px;
`;

export const Content = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.PALETTE.white[200]};
	height: 511px;
	text-align: center;
	${flexCenter}

	> span {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
		color: ${({ theme }) => theme.PALETTE.gray[400]};
	}
`;

export const ButtonBox = styled.div`
	${flexCenter}

	@media screen and (min-width: 768px) {
		justify-content: right;

		& button {
			width: 180px;
		}
	}
`;
