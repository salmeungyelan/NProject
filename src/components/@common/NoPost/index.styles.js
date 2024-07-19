import styled from 'styled-components';
import { flexColumnCenter } from 'styles/common';

export const NoPost = styled.div`
	width: 100%;
	height: calc(100vh - 490px);
	${flexColumnCenter}
	gap: 19px;

	> span {
		font-weight: 600;
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}

	& button {
		width: 100px;
	}

	@media screen and (min-width: 768px) {
		height: calc(100vh - 530px);

		> span {
			font-size: ${({ theme }) => theme.FONT_SIZE.ml};
		}
	}

	@media screen and (min-width: 1200px) {
		height: calc(100vh - 563px);
	}
`;
