import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

export const Titles = styled.div`
	${flexAlignCenter}
	justify-content: left;

	font-size: ${({ theme }) => theme.FONT_SIZE.xl};
	font-weight: 600;
	text-align: center;
`;
