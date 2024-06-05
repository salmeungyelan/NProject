import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

export const Titles = styled.div`
	${flexAlignCenter}
	justify-content: left;
	gap: 3px;

	font-size: ${({ theme }) => theme.FONT_SIZE.mb};
	font-weight: 600;
	text-align: center;
	height: 22px;

	@media screen and (min-width: 376px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.xl};
		height: 36px;
	}
`;
