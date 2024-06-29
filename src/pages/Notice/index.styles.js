import styled, { css } from 'styled-components';
import { bodyContainer, flexAlignCenter, flexColumn } from 'styles/common';

export const Body = styled.div`
	${bodyContainer}
	${flexColumn}
	gap: 32px;
`;

export const MainBox = styled.div`
	${flexColumn}
	gap: 10px;

	@media screen and (min-width: 768px) {
		gap: 12px;
	}
`;

export const Select = styled.div`
	width: 100%;

	> ul {
		${flexAlignCenter}
		border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
		position: relative; /* 자식 요소가 절대 위치를 사용할 수 있도록 설정 */
	}
`;

export const after = css`
	&::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: -1px; /* ul의 border-bottom과 겹치도록 설정 */
		border-bottom: 2px solid ${({ theme }) => theme.PALETTE.orange[100]};
		z-index: -1;
	}
`;

export const Li = styled.li`
	width: 41px;
	font-size: ${({ theme }) => theme.FONT_SIZE.s};
	color: ${({ theme }) => theme.PALETTE.gray[100]};
	padding: 5px 0;
	text-align: center;
	position: relative;
	z-index: 1;
	cursor: pointer;

	& input {
		display: none;
	}

	&:has(input:checked),
	&:hover {
		color: ${({ theme }) => theme.PALETTE.orange[100]};
		${after}
	}

	@media screen and (min-width: 768px) {
		width: 56px;
		padding: 6px 0;
		font-size: ${({ theme }) => theme.FONT_SIZE.m};
	}
`;

export const Div = styled.div`
	border-top: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
`;
