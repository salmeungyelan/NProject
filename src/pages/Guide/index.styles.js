import styled from 'styled-components';
import { bodyContainer, flexColumn } from 'styles/common';

export const Body = styled.div`
	${bodyContainer}
	${flexColumn}
	gap: 32px;
`;

export const MainBox = styled.div`
	${flexColumn}
	gap: 10px;

	@media screen and (min-width: 768px) {
		gap: 12px;
	}
`;
