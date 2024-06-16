import styled from 'styled-components';
import {
	bodyContainer,
	flexCenter,
	flexColumn,
	flexColumnCenter,
	flexSpaceBetweenCenter,
} from 'styles/common';

export const Body = styled.div`
	${bodyContainer}
	${flexColumn}
  gap: 32px;
`;

export const MainBox = styled.div`
	${flexColumn}
	gap: 18px;

	@media screen and (min-width: 768px) {
		gap: 32px;
	}
`;

export const Main = styled.div`
	${flexColumn}
	gap: 12px;

	@media screen and (min-width: 768px) {
		gap: 18px;
	}
`;

export const MultiSelect = styled.div`
	${flexCenter}
	gap: 10px;
`;

export const SelectBox = styled.div`
	${flexSpaceBetweenCenter}
	align-items: flex-start;
	gap: 6px;
`;

export const CardBox = styled.div`
	display: grid;
	grid-gap: 12px 8px;
	grid-template-columns: repeat(2, 1fr);

	@media screen and (min-width: 768px) {
		grid-gap: 13px 11px;
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (min-width: 1200px) {
		grid-gap: 16px 15px;
		grid-template-columns: repeat(5, 1fr);
	}
`;

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
