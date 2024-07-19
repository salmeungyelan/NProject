import styled from 'styled-components';
import { flexAlignCenter, flexColumn } from 'styles/common';

export const TitleBox = styled.div`
	${flexColumn}
	gap: 8px;

	> p {
		font-size: ${({ theme }) => theme.FONT_SIZE.s};
		color: ${({ theme }) => theme.PALETTE.gray[100]};

		@media screen and (min-width: 768px) {
			font-size: ${({ theme }) => theme.FONT_SIZE.ml};
		}
	}
`;

export const Title = styled.div`
	height: 17px;
	${flexAlignCenter}
	gap: 3px;

	> span {
		font-size: ${({ theme }) => theme.FONT_SIZE.xxl};
		font-weight: 600;
	}

	@media screen and (min-width: 768px) {
		height: 27px;

		> span {
			font-size: ${({ theme }) => theme.FONT_SIZE.xj};
		}
	}
`;
