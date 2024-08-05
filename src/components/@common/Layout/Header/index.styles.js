import styled, { css } from 'styled-components';
import { flexCenter, flexSpaceBetweenCenter } from 'styles/common';

const MediaQuery = css`
	@media screen and (max-width: 767px) {
		display: none;
	}
`;

export const Header = styled.div`
	${flexCenter}
	flex-direction: column;
	background-color: #001219;
	height: max-content;
	width: 100%;
	position: fixed;
	z-index: 10;
	${MediaQuery}
`;

export const TopBox = styled.div`
	padding: 10px 0;
	width: 568px;
	${flexSpaceBetweenCenter}

	@media screen and (min-width: 1200px) {
		width: 1200px;
	}
`;

export const ImgBox = styled.div``;

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

	> ul {
		${flexCenter}

		height: 100%;
	}

	& a:link,
	a:visited,
	span {
		color: ${({ theme }) => theme.PALETTE.gray[100]};
		text-decoration: none;
	}
`;

export const Li = styled.li`
	height: 100%;
	padding: 0 20px;
	${flexCenter}

	&:hover {
		& span {
			color: ${({ theme }) => theme.PALETTE.orange[100]};
		}

		> ul {
			display: flex;
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

	&:has(input:checked) {
		> label > a {
			color: ${({ theme }) => theme.PALETTE.orange[100]};
		}
	}
`;

export const MoreNav = styled.ul`
	width: 100%;
	height: 60px;
	${flexCenter}
	gap: 32px;
	display: none;
	position: absolute;
	top: 99%;
	left: 0;
	right: 0;
	background-color: #fafafa80;
	font-weight: 400;
	font-size: ${({ theme }) => theme.FONT_SIZE.ml};
	color: ${({ theme }) => theme.PALETTE.gray[100]};

	& input {
		display: none;
	}

	& li:hover {
		& a {
			color: ${({ theme }) => theme.PALETTE.orange[100]};
		}
	}
`;

export const Help = styled.label`
	&:has(input:checked) {
		& span {
			color: ${({ theme }) => theme.PALETTE.orange[100]};
		}
	}
`;

export const MoreLi = styled.li`
	&:hover {
		& a {
			color: ${({ theme }) => theme.PALETTE.orange[100]};
		}
	}

	&:has(input:checked) {
		& a {
			color: ${({ theme }) => theme.PALETTE.orange[100]};
		}
	}
`;
