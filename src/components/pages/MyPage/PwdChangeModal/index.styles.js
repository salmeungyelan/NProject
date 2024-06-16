import styled, { css } from 'styled-components';
import { ModalBackground, flexCenter, flexColumn } from 'styles/common';

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
	width: 294px;
	padding: 32px 20px;
	${flexColumn}
	gap: 22px;

	@media only screen and (min-width: 768px) {
		width: 400px;
		padding: 40px 40px;
	}
`;

export const Header = styled.div`
	${flexCenter}
	justify-content: right;
	gap: 56px;

	@media only screen and (min-width: 768px) {
		gap: 73px;
	}
`;

export const Title = styled.p`
	color: ${({ theme }) => theme.PALETTE.gray[300]};
	font-size: ${({ theme }) => theme.FONT_SIZE.l};
	font-weight: 500;

	@media only screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.j};
	}
`;

const buttonBgReset = css`
	background: none;
	width: 16px;
	height: 16px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;

	@media only screen and (min-width: 768px) {
		width: 20px;
		height: 20px;
	}
`;

export const CloseBtn = styled.button`
	${buttonBgReset}
	background-image: url('/assets/icons/modal-x.svg');
`;

export const Body = styled.div`
	${flexColumn}
	gap: 3px;

	& span {
		font-size: ${({ theme }) => theme.FONT_SIZE.s};
		color: ${({ theme }) => theme.PALETTE.orange[100]};

		@media only screen and (min-width: 768px) {
			font-size: ${({ theme }) => theme.FONT_SIZE.ms};
		}
	}
`;

export const InputBox = styled.div`
	${flexColumn}
	gap: 8px;

	> p {
		font-size: ${({ theme }) => theme.FONT_SIZE.ms};
		font-weight: 500;
		color: ${({ theme }) => theme.PALETTE.orange[100]};
	}

	@media only screen and (min-width: 768px) {
		> input {
			height: 40px;
		}

		> p {
			font-size: ${({ theme }) => theme.FONT_SIZE.l};
		}
	}
`;

export const ButtonBox = styled.div`
	${flexCenter}
	gap: 10px;

	> button {
		width: 66px;
	}

	@media only screen and (min-width: 768px) {
		gap: 16px;

		> button {
			width: 130px;
		}
	}
`;
