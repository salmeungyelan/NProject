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
	width: 400px;
	padding: 2rem 1.875rem;
`;

export const Header = styled.div`
	${flexSpaceBetweenCenter}
	color: ${({ theme }) => theme.PALETTE.gray[200]};
`;

export const Title = styled.p`
	color: ${({ theme }) => theme.PALETTE.gray[200]};
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
	background-image: url('/assets/images/x_button.svg');
`;

export const Body = styled.div`
	margin: 2rem 0 1rem 0;
	padding: 0 1.25rem 1rem 0;
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
		width: 5px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.PALETTE.gray[100]};
	}

	&::-webkit-scrollbar-track {
		background-color: ${({ theme }) => theme.PALETTE.white[200]};
	}
`;

export const CheckBox = styled.div`
	margin-top: 1.25rem;
	${flexCenter}
	cursor: pointer;
	gap: 0.5rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.sm};
	color: ${({ theme }) => theme.PALETTE.gray[200]};
`;
