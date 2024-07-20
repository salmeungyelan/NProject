import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import usePathname from 'hooks/usePathname';
import LINK from 'constants/link';

import * as S from './index.styles';

import Logo from 'components/@common/Logo';
import navIconMapper from './nav-icon-mapper';

function MobileHeader(props) {
	const { logout, name } = props;

	const { path } = usePathname();

	// 모바일 NAV
	const [navClicked, setNavClicked] = useState('/' + (path ?? ''));

	// 모바일 NAV 더보기
	const [moreBtn, setMoreBtn] = useState(false);

	// 모바일 Side Bar Open
	const [sideBar, setSideBar] = useState(false);

	// 모바일 Side Bar 고객센터
	const [help, setHelp] = useState(false);

	// 모바일 NAV
	const handleClickNav = link => {
		setNavClicked(link);
		setMoreBtn(false);
	};

	// 모바일 NAV 더보기 버튼
	const handleClickMore = () => {
		setMoreBtn(prev => !prev);
	};

	// 사이드 바 오픈
	const handleOpenSideBar = () => {
		setSideBar(prev => !prev);

		if (![LINK.NOTICE, LINK.GUIDE].includes(navClicked)) {
			setHelp(false);
		}
	};

	// 사이드 바 고객센터 오픈
	const handleOpenHelpMenu = () => {
		setHelp(prev => !prev);
	};

	useEffect(() => {
		if (sideBar) document.body.style.overflow = 'hidden';
		else document.body.style.overflow = 'auto';
	}, [sideBar]);

	useEffect(() => {
		setSideBar(false);
		setMoreBtn(false);
	}, [navClicked]);

	const userHelp = [LINK.NOTICE, LINK.GUIDE].includes(navClicked) || help;
	const navMore =
		[LINK.TEAM, LINK.VIEW, LINK.DEVELOP, LINK.MY].includes(navClicked) ||
		moreBtn;

	return (
		<S.Header>
			<S.FixedHeader>
				<S.TopBox>
					<S.ImgBox>
						<Link to={LINK.HOME}>
							<Logo size="header" white />
						</Link>
					</S.ImgBox>

					<S.WelcomeText>
						<p>
							<strong>{name}</strong> 님 환영합니다!
						</p>
					</S.WelcomeText>

					<S.Side onClick={() => handleOpenSideBar()}>
						<img
							src={`/assets/icons/${sideBar ? 'white-x' : 'hamburger'}.svg`}
						/>
					</S.Side>
				</S.TopBox>
			</S.FixedHeader>

			<S.BottomNav>
				<S.BottomNavList>
					<S.BottomNavContent>
						<S.NavLabel>
							<input type="radio" checked={LINK.REVIEW === navClicked} />
							<Link
								to={LINK.REVIEW}
								onClick={() => handleClickNav(LINK.REVIEW)}
							>
								{navIconMapper(LINK.REVIEW)}
								리뷰
							</Link>
						</S.NavLabel>
					</S.BottomNavContent>

					<S.BottomNavContent>
						<S.NavLabel>
							<input type="radio" checked={LINK.NOTICE === navClicked} />
							<Link
								to={LINK.NOTICE}
								onClick={() => handleClickNav(LINK.NOTICE)}
							>
								{navIconMapper(LINK.NOTICE)}
								공지사항
							</Link>
						</S.NavLabel>
					</S.BottomNavContent>

					<S.BottomNavContent>
						<S.NavLabel>
							<input type="radio" checked={LINK.HOME === navClicked} />
							<Link to={LINK.HOME} onClick={() => handleClickNav(LINK.HOME)}>
								{navIconMapper(LINK.HOME)}
								HOME
							</Link>
						</S.NavLabel>
					</S.BottomNavContent>

					<S.BottomNavContent>
						<S.NavLabel>
							<input type="radio" checked={LINK.GUIDE === navClicked} />
							<Link to={LINK.GUIDE} onClick={() => handleClickNav(LINK.GUIDE)}>
								{navIconMapper(LINK.GUIDE)}
								이용안내
							</Link>
						</S.NavLabel>
					</S.BottomNavContent>

					<S.BottomNavContent>
						<S.NavLabel>
							<input type="radio" checked={navMore} onClick={handleClickMore} />
							<S.Svg
								id="Layer-1"
								data-name="Layer 1"
								xmlns="http://www.w3.org/2000/svg"
								version="1.1"
								viewBox="0 0 25.12 25.12"
							>
								<g id="-그룹-1076" data-name="그룹 1076">
									<g id="-타원-91" data-name="타원 91">
										<path
											className="cls-1"
											d="M3.93,15.85c-1.81,0-3.29-1.48-3.29-3.29s1.48-3.29,3.29-3.29,3.29,1.48,3.29,3.29-1.48,3.29-3.29,3.29ZM3.93,10.27c-1.26,0-2.29,1.03-2.29,2.29s1.03,2.29,2.29,2.29,2.29-1.03,2.29-2.29-1.03-2.29-2.29-2.29Z"
										/>
									</g>
									<g id="-타원-92" data-name="타원 92">
										<path
											className="cls-1"
											d="M12.56,15.85c-1.81,0-3.29-1.48-3.29-3.29s1.48-3.29,3.29-3.29,3.29,1.48,3.29,3.29-1.48,3.29-3.29,3.29ZM12.56,10.27c-1.26,0-2.29,1.03-2.29,2.29s1.03,2.29,2.29,2.29,2.29-1.03,2.29-2.29-1.03-2.29-2.29-2.29Z"
										/>
									</g>
									<g id="-타원-93" data-name="타원 93">
										<path
											className="cls-1"
											d="M21.2,15.85c-1.81,0-3.29-1.48-3.29-3.29s1.48-3.29,3.29-3.29,3.29,1.48,3.29,3.29-1.48,3.29-3.29,3.29ZM21.2,10.27c-1.26,0-2.29,1.03-2.29,2.29s1.03,2.29,2.29,2.29,2.29-1.03,2.29-2.29-1.03-2.29-2.29-2.29Z"
										/>
									</g>
								</g>
							</S.Svg>
							더보기
						</S.NavLabel>
					</S.BottomNavContent>
				</S.BottomNavList>
			</S.BottomNav>

			<S.MoreNav $moreBtn={moreBtn}>
				<S.MoreNavList>
					<S.BottomNavContent>
						<S.NavLabel>
							<input type="radio" checked={LINK.TEAM === navClicked} />
							<Link to={LINK.TEAM} onClick={() => setNavClicked(LINK.TEAM)}>
								{navIconMapper(LINK.TEAM)}
								체험단
							</Link>
						</S.NavLabel>
					</S.BottomNavContent>

					<S.BottomNavContent>
						<S.NavLabel>
							<input type="radio" checked={LINK.VIEW === navClicked} />
							<Link to={LINK.VIEW} onClick={() => setNavClicked(LINK.VIEW)}>
								{navIconMapper(LINK.VIEW)}
								뷰탭&인스타
							</Link>
						</S.NavLabel>
					</S.BottomNavContent>

					<S.BottomNavContent>
						<S.NavLabel>
							<input type="radio" checked={LINK.DEVELOP === navClicked} />
							<Link
								to={LINK.DEVELOP}
								onClick={() => setNavClicked(LINK.DEVELOP)}
							>
								{navIconMapper(LINK.DEVELOP)}
								홈페이지 제작
							</Link>
						</S.NavLabel>
					</S.BottomNavContent>

					<S.BottomNavContent>
						<S.NavLabel>
							<input type="radio" checked={LINK.MY === navClicked} />
							<Link to={LINK.MY} onClick={() => setNavClicked(LINK.MY)}>
								{navIconMapper(LINK.MY)}
								마이페이지
							</Link>
						</S.NavLabel>
					</S.BottomNavContent>
				</S.MoreNavList>
			</S.MoreNav>

			<S.SideBarBackground $sideBar={sideBar}>
				<S.SideBar>
					<div>
						<Link to={LINK.REVIEW} onClick={() => handleClickNav(LINK.REVIEW)}>
							<S.SideMenu $navClicked={navClicked === LINK.REVIEW}>
								리뷰
							</S.SideMenu>
						</Link>

						<Link to={LINK.TEAM} onClick={() => handleClickNav(LINK.TEAM)}>
							<S.SideMenu $navClicked={navClicked === LINK.TEAM}>
								체험단
							</S.SideMenu>
						</Link>

						<Link to={LINK.VIEW} onClick={() => handleClickNav(LINK.VIEW)}>
							<S.SideMenu $navClicked={navClicked === LINK.VIEW}>
								뷰탭&인스타
							</S.SideMenu>
						</Link>

						<Link
							to={LINK.DEVELOP}
							onClick={() => handleClickNav(LINK.DEVELOP)}
						>
							<S.SideMenu $navClicked={navClicked === LINK.DEVELOP}>
								홈페이지 제작
							</S.SideMenu>
						</Link>

						<S.Help onClick={() => handleOpenHelpMenu()} $help={userHelp}>
							고객센터
							<button />
						</S.Help>

						<Link to={LINK.MY} onClick={() => handleClickNav(LINK.MY)}>
							<S.MyPage>마이페이지</S.MyPage>
						</Link>

						<S.Logout onClick={logout}>로그아웃</S.Logout>
					</div>

					<S.HelpMenu $help={help}>
						<Link to={LINK.NOTICE} onClick={() => handleClickNav(LINK.NOTICE)}>
							<S.SideMenu $navClicked={navClicked === LINK.NOTICE}>
								공지사항
							</S.SideMenu>
						</Link>

						<Link to={LINK.GUIDE} onClick={() => handleClickNav(LINK.GUIDE)}>
							<S.SideMenu $navClicked={navClicked === LINK.GUIDE}>
								이용안내
							</S.SideMenu>
						</Link>
					</S.HelpMenu>
				</S.SideBar>
			</S.SideBarBackground>
		</S.Header>
	);
}

export default MobileHeader;
