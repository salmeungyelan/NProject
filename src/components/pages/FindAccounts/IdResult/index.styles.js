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
