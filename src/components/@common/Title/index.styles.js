import styled from 'styled-components';
import { flexAlignCenter } from 'styles/common';

export const Titles = styled.div`
	${flexAlignCenter}
	gap: 3px;
	height: 20px;

	> span {
		font-size: ${({ theme }) => theme.FONT_SIZE.xxl};
		font-weight: 600;
	}

	@media screen and (min-width: 376px) {
		${flexAlignCenter}
		height: 25px;

		> span {
			font-size: ${({ theme }) => theme.FONT_SIZE.xj};
		}
	}
`;
