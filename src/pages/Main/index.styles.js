import styled from 'styled-components';
import { flexAlignCenter, flexColumn } from 'styles/common';

export const Body = styled.div`
	width: 295px;
	margin: 0 auto;
	padding: 50px 0;
	${flexColumn}
	gap: 36px;

	@media screen and (min-width: 376px) {
		width: 568px;
	}

	@media screen and (min-width: 769px) {
		width: 1200px;
	}
`;

export const Mores = styled.div`
	${flexAlignCenter}
	display: flex;
	flex-wrap: wrap;
	gap: 23px;

	@media screen and (min-width: 769px) {
		justify-content: space-between;
	}
`;
