import styled from 'styled-components';
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
	height: 80%;
	padding: 10px;
	max-width: 600px;
	max-height: 600px;
	transition: all ease 0.3s;
	cursor: pointer;

	& img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	& video {
		width: 90%;
		height: 100%;
	}

	@media screen and (max-width: 768px) {
		transition: all ease 0.3s;
		width: 90%;
		height: 90%;
	}
`;
