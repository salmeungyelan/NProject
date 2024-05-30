import styled from 'styled-components';
import { bodyContainer, flexAlignCenter, flexColumn } from 'styles/common';

export const Body = styled.div`
	${bodyContainer}
	padding: 50px 0;
	${flexColumn}
	gap: 30px;
`;

export const Mores = styled.div`
	${flexAlignCenter}
	justify-content: space-between;
	gap: 23px;
`;
