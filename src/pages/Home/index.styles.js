import styled from 'styled-components';
import { bodyContainer, flexAlignCenter, flexColumn } from 'styles/common';

export const Body = styled.div`
	${bodyContainer}
	${flexColumn}
	gap: 32px;
`;

export const Mores = styled.div`
	${flexAlignCenter}
	display: flex;
	flex-wrap: wrap;
	gap: 25px;

	@media screen and (min-width: 1200px) {
		justify-content: space-between;
		align-items: flex-start;
	}
`;
