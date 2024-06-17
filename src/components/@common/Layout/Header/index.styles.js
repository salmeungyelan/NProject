import styled, { css } from 'styled-components';
import { flexCenter, flexSpaceBetweenCenter } from 'styles/common';

const MediaQuery = css`
	@media screen and (max-width: 767px) {
		display: none;
	}
`;

export const Header = styled.div`
	${flexCenter}
	background-color: #001219;
	height: 80px;
	width: auto;
	${MediaQuery}
`;

export const TopBox = styled.div`
	width: 568px;
	${flexSpaceBetweenCenter}
	position: relative;

	@media screen and (min-width: 1200px) {
		width: 1200px;
	}
`;

export const ImgBox = styled.div`
	& img {
		width: 60px;
		height: 62px;
	}
`;

export const WelcomeText = styled.div`
	color: ${({ theme }) => theme.PALETTE.white[100]};
	font-size: ${({ theme }) => theme.FONT_SIZE.m};

	> p > strong {
		color: ${({ theme }) => theme.PALETTE.orange[100]};
		font-weight: 500;
	}

	@media screen and (min-width: 768px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	}

	@media screen and (min-width: 1200px) {
		font-size: ${({ theme }) => theme.FONT_SIZE.xl};
	}
`;

export const ButtonBox = styled.div`
	${flexCenter}
	gap: 24px;
`;

export const Logout = styled.button`
	color: ${({ theme }) => theme.PALETTE.white[100]};
	border-radius: 26px;
	background-color: ${({ theme }) => theme.PALETTE.orange[100]};
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	width: 74px;
	height: 23px;
	font-size: 500;
`;

export const MyPage = styled(Logout)`
	background-color: ${({ theme }) => theme.PALETTE.navy};
`;

export const Nav = styled.nav`
	${flexCenter}
	width: 100%;
	height: 60px;
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	box-shadow: 0 2px 4px 0 #00000029;
	font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	font-weight: 500;
	position: absolute;
	top: 10%;
	left: 0;

	> ul {
		${flexCenter}
		gap: 32px;
	}

	& a:link,
	a:visited,
	span {
		color: ${({ theme }) => theme.PALETTE.gray[100]};
		text-decoration: none;
	}
`;

export const Li = styled.li`
	position: relative;

	&:hover,
	span:hover {
		color: ${({ theme }) => theme.PALETTE.orange[100]};

		> ul {
			display: inline-block;
		}
	}

	> label {
		${flexCenter}
		text-decoration: none;
		cursor: pointer;

		> input {
			display: none;

			&:checked {
				color: ${({ theme }) => theme.PALETTE.orange[100]};
			}
		}
	}
`;

export const MoreNav = styled.ul`
	width: 100vw;
	height: 60px;
	${flexCenter}
	gap: 32px;
	display: none;
	position: absolute;
	transform: translate(-62.5%, 38%);
	background-color: ${({ theme }) => theme.PALETTE.white[0]};
	font-weight: 400;
`;
