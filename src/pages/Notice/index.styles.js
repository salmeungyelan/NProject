import styled from 'styled-components';
import { bodyContainer, flexColumn } from 'styles/common';

export const Body = styled.div`
	${bodyContainer}
	padding: 50px 0;
	${flexColumn}
	gap: 32px;
`;

export const TopBox = styled.div`
	${flexColumn};
	gap: 8px;

	> span {
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
		color: ${({ theme }) => theme.PALETTE.gray[100]};
	}
`;

export const MainBox = styled.div`
	${flexColumn}
	gap: 10px;

	@media screen and (min-width: 376px) {
		gap: 12px;
	}
`;

export const Select = styled.div`
	width: 100%;
`;
