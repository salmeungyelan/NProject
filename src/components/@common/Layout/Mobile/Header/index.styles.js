import styled, { css } from 'styled-components';
import {
	ModalBackground,
	flexCenter,
	flexColumn,
	flexLeftCenter,
	flexSpaceBetweenCenter,
} from 'styles/common';

const MediaQuery = css`
	@media screen and (min-width: 768px) {
		display: none;
	}
`;

export const Header = styled.div`
	${flexCenter}
	background-color: #001219;
	height: 80px;
	width: auto;
	position: relative;

	${MediaQuery}
`;

export const TopBox = styled.div`
	width: 294px;
	${flexSpaceBetweenCenter}
`;

export const ImgBox = styled.div``;

export const WelcomeText = styled.div`
	color: ${({ theme }) => theme.PALETTE.white[100]};
	font-size: ${({ theme }) => theme.FONT_SIZE.m};

	> p > strong {
		color: ${({ theme }) => theme.PALETTE.orange[100]};
		font-weight: 500;
	}
`;

export const Side = styled.div`
	${flexCenter}
	gap: 24px;
	cursor: pointer;

	> img {
		width: 16px;
	}
`;

export const BottomNav = styled.div`
	width: 100%;
	height: 66px;
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	position: fixed;
	bottom: 0;
	z-index: 5;
	${flexCenter}
	padding: 0;
	box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.08);
	box-shadow: -10px 20px rgba(0, 0, 0, 0.3);
`;

export const MoreNav = styled.div`
	position: absolute;
	width: 100%;
	${flexCenter}
	gap: 33px;
	top: -100%;
	height: 66px;
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
`;

export const BottomNavList = styled.ul`
	${flexSpaceBetweenCenter}
	width: 375px;
	max-width: 576px;
	padding: 0 28px;
	z-index: 4;
`;

export const MoreNavList = styled(BottomNavList)`
	${flexLeftCenter}
	width: 375px;
	gap: 18px;
`;

export const BottomNavContent = styled.li`
	& input {
		display: none;
	}
`;

export const NavLabel = styled.label`
	${flexColumn}
	align-items: center;
	font-size: ${({ theme }) => theme.FONT_SIZE.ms};
	color: ${({ theme }) => theme.PALETTE.gray[100]};
	cursor: pointer;

	> a {
		${flexColumn}
		align-items: center;
		text-decoration: none;

		&:visited {
			color: ${({ theme }) => theme.PALETTE.gray[100]};
		}
	}

	&:hover {
		color: ${({ theme }) => theme.PALETTE.orange[100]};

		& a {
			color: ${({ theme }) => theme.PALETTE.orange[100]};
		}

		& svg {
			fill: ${({ theme }) => theme.PALETTE.orange[100]};
		}
	}
`;

export const Svg = styled.svg`
	width: 25px;
	height: 25px;
	margin-bottom: 6px;
	fill: ${({ theme }) => theme.PALETTE.gray[100]};
`;

export const SideBarBackground = styled.div`
	${ModalBackground}
	${flexCenter}
	display: ${({ $sideBar }) => !$sideBar && 'none'};
	position: absolute;
	z-index: 2;
	top: 100%;
	height: calc(100vh - 80px);
	justify-content: right;
`;

export const SideBar = styled.div`
	width: max-content;
	height: calc(100vh - 80px);
	background-color: ${({ theme }) => theme.PALETTE.white[100]};
	${flexCenter}
	align-items: flex-start;
	justify-content: right;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	border-right: none;

	> div {
		height: 100%;
		& a:link,
		a:visited {
			text-decoration: none;
			color: ${({ theme }) => theme.PALETTE.gray[200]};
		}
	}

	> div:first-child {
		border-right: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	}
`;

export const HelpMenu = styled.div`
	display: ${({ $help }) => !$help && 'none'};
`;

const buttonBgReset = css`
	background: none;
	font-size: 0;
	width: 11px;
	height: 11px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
`;

export const SideMenu = styled.div`
	width: 100px;
	height: 36px;
	${flexLeftCenter}
	padding: 10px 10px;
	font-size: ${({ theme }) => theme.FONT_SIZE.m};
	color: ${({ theme }) => theme.PALETTE.gray[200]};
	border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray[0]};
	gap: 6px;
	cursor: pointer;

	> button {
		${buttonBgReset}
		background-image: url('/assets/icons/right-arrow.svg');
		background-repeat: 0;
	}

	&:hover {
		color: ${({ theme }) => theme.PALETTE.orange[100]};

		> button {
			background-image: url('/assets/icons/oright-arrow.svg');
		}
	}
`;

export const MyPage = styled(SideMenu)`
	color: ${({ theme }) => theme.PALETTE.navy};

	&:hover {
		color: ${({ theme }) => theme.PALETTE.navyHover};
	}
`;

export const Logout = styled(SideMenu)`
	color: ${({ theme }) => theme.PALETTE.orange[100]};

	&:hover {
		color: ${({ theme }) => theme.PALETTE.orange[300]};
	}
`;
