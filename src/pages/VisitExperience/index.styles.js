import styled from 'styled-components';
import { bodyContainer, flexCenter, flexColumn } from 'styles/common';

export const Body = styled.div`
	${bodyContainer}
	${flexColumn}
  gap: 32px;
`;

export const Content = styled.div`
	width: 100%;
	height: 511px;
	text-align: center;
	${flexCenter}

	> span {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
		color: ${({ theme }) => theme.PALETTE.gray[400]};
	}
`;

export const ApplyBtnBox = styled.div`
	width: 100%;
	${flexCenter}
	position: fixed;
	height: 56px;
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	bottom: ${({ $moreBtn }) => ($moreBtn ? '131px' : '66px')};
	box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.08);
	z-index: 3;

	> div {
		width: 294px;
		${flexCenter}
		gap: 12px;
	}

	@media screen and (min-width: 768px) {
		height: 72px;
		padding: 20px 100px;
		bottom: 0;
		z-index: 23;

		> div {
			justify-content: right;
			width: 100%;
		}

		& button {
			width: 190px;
		}
	}
`;
