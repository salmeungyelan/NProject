import styled from 'styled-components';
import { bodyContainer, flexCenter, flexColumn } from 'styles/common';

export const Body = styled.div`
	${bodyContainer}
	${flexColumn}
  gap: 32px;

	> div {
		${flexColumn}
		gap: 4px;

		@media screen and (min-width: 768px) {
			gap: 6px;
		}
	}
`;

export const Account = styled.div`
	${flexColumn}
	gap: 12px;

	@media screen and (min-width: 768px) {
		gap: 16px;
	}
`;

export const InfoBox = styled.div`
	${flexColumn}
	gap: 8px;
	box-shadow: 0 2px 4px 0 #00000026;
	padding: 14px 16px;
`;

export const PwBtn = styled.div`
	${flexCenter}

	> button {
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};

		@media screen and (min-width: 768px) {
			width: 180px;
			font-size: ${({ theme }) => theme.FONT_SIZE.ml};
		}
	}
`;

export const Notice = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	color: ${({ theme }) => theme.PALETTE.orange[100]};

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	}
`;
