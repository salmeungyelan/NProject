import { styled, css } from 'styled-components';
import {
	ModalBackground,
	flexCenter,
	flexSpaceBetweenCenter,
} from 'styles/common';

export const Background = styled.div`
	${ModalBackground}
	z-index: 101;
`;

export const Container = styled.div`
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	max-width: 1200px;
	width: 70%;
	padding: 32px 30px;
`;

// 모바일 -> 폰트 헤더 및 본문 2px 줄이기
export const Header = styled.div`
	${flexSpaceBetweenCenter}
`;

export const Title = styled.p`
	color: ${({ theme }) => theme.PALETTE.gray[300]};
	font-size: ${({ theme }) => theme.FONT_SIZE.md};
	font-weight: 600;
`;

const buttonBgReset = css`
	background: none;
	font-size: 0;
	width: 16px;
	height: 16px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
`;

export const CloseBtn = styled.button`
	${buttonBgReset}
	background-image: url('/assets/icons/modal-x-btn.svg');
`;

export const Body = styled.div`
	margin: 32px 0 16px 0;
	padding: 0 20px 16px 0;
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	font-weight: 400;
	color: ${({ theme }) => theme.PALETTE.gray[200]};
	overflow-y: auto;
	height: 400px;

	> pre {
		white-space: pre-wrap;
		line-height: 1.5;
	}

	&::-webkit-scrollbar {
		display: none;
	}

	@media only screen and (min-width: 769px) {
		&::-webkit-scrollbar {
			display: inherit;
			width: 5px;
		}

		&::-webkit-scrollbar-thumb {
			background-color: ${({ theme }) => theme.PALETTE.gray[100]};
		}

		&::-webkit-scrollbar-track {
			background-color: ${({ theme }) => theme.PALETTE.white[200]};
		}
	}
`;

export const ButtonBox = styled.div`
	margin-top: 24px;
	cursor: pointer;
	${flexCenter}

	> button {
		width: 100%;
	}

	@media screen and (min-width: 369px) {
		> button {
			width: 180px;
		}
	}
`;
