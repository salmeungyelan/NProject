import styled from 'styled-components';
import {
	bodyContainer,
	flexCenter,
	flexSpaceBetweenCenter,
} from 'styles/common';

export const Header = styled.div`
	${flexCenter}
	background-color: #001219;
	height: 80px;
`;

export const TopBox = styled.div`
	${bodyContainer}
	${flexSpaceBetweenCenter}
`;

export const WelcomeText = styled.div`
	color: ${({ theme }) => theme.PALETTE.white[100]};
	font-size: ${({ theme }) => theme.FONT_SIZE.big};

	> p > strong {
		color: ${({ theme }) => theme.PALETTE.orange[100]};
		font-weight: 500;
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
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
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
	font-size: ${({ theme }) => theme.FONT_SIZE.re};
	font-weight: 500;

	> ul {
		${flexCenter}
		gap: 32px;
	}

	& a:link,
	a:visited {
		color: ${({ theme }) => theme.PALETTE.gray[100]};
		text-decoration: none;
	}
`;

export const Li = styled.li`
	position: relative;

	&:hover {
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
	background-color: #fafafa80;
	font-weight: 400;
`;
