import styled from 'styled-components';
import { ModalBackground, flexColumnCenter } from 'styles/common';

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
	max-width: 400px;
	width: 80%;
	padding: 32px 30px;
	${flexColumnCenter}
	gap: 36px;
	transition: all ease 0.3s;
	border-radius: 6px;

	@media screen and (max-width: 768px) {
		transition: all ease 0.3s;
	}
`;

export const Header = styled.div`
	${flexColumnCenter}
	gap: 22px;

	> img {
		width: 40px;
	}
`;

export const Title = styled.p`
	color: ${({ theme }) => theme.PALETTE.gray[300]};
	font-size: ${({ theme }) => theme.FONT_SIZE.l};
	font-weight: 500;
`;

export const Body = styled.div`
	font-size: ${({ theme }) => theme.FONT_SIZE.m};
	font-weight: 400;
	color: ${({ theme }) => theme.PALETTE.gray[200]};
`;

export const ButtonBox = styled.div`
	width: 85%;
	cursor: pointer;
`;
