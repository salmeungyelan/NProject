import styled, { css } from 'styled-components';
import { ModalBackground } from 'styles/common';

export const Background = styled.div`
	${ModalBackground}
	z-index: 101;
`;

export const Container = styled.div`
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 80%;
	padding: 10px;
	max-width: 500px;
	transition: all ease 0.3s;

	& img {
		width: 100%;
	}

	@media screen and (max-width: 768px) {
		transition: all ease 0.3s;
	}
`;

const buttonBgReset = css`
	background: none;
	width: 80%;
	height: 80%;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	max-width: 20px;
	max-height: 20px;
`;

export const CloseBtn = styled.button`
	${buttonBgReset}
	background-image: url('/assets/icons/modal-x.svg');
	position: absolute;
	transform: translate(-90%, 40%);
	right: 0;
`;
