import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import usePathname from 'hooks/usePathname';
import LINK from 'constants/link';

import * as S from './index.styles';

import Logo from 'components/@common/Logo';

function Header(props) {
	const { logout, name } = props;

	const navigate = useNavigate();

	const { path } = usePathname();

	const [navClicked, setNavClicked] = useState('/' + (path ?? ''));

	useEffect(() => {
		if (navClicked !== path) {
			setNavClicked('/' + (path ?? ''));
		}
	}, [path]);

	const handleClickNav = link => {
		setNavClicked(link);
	};

	const handleMyPageNavigate = () => {
		navigate(LINK.MY);
	};

	return (
		<>
			<S.Header>
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

					<S.ButtonBox>
						<S.Logout onClick={logout}>LOGOUT</S.Logout>
						<S.MyPage onClick={handleMyPageNavigate}>MY PAGE</S.MyPage>
					</S.ButtonBox>
				</S.TopBox>

				<S.Nav>
					<ul>
						<S.Li>
							<label>
								<input type="radio" checked={LINK.HOME === navClicked} />
								<Link to={LINK.HOME} onClick={() => handleClickNav(LINK.HOME)}>
									홈
								</Link>
							</label>
						</S.Li>
						<S.Li>
							<label>
								<input type="radio" checked={LINK.REVIEW === navClicked} />
								<Link
									to={LINK.REVIEW}
									onClick={() => handleClickNav(LINK.REVIEW)}
								>
									리뷰
								</Link>
							</label>
						</S.Li>
						<S.Li>
							<label>
								<input type="radio" checked={LINK.TEAM === navClicked} />
								<Link to={LINK.TEAM} onClick={() => handleClickNav(LINK.TEAM)}>
									체험단
								</Link>
							</label>
						</S.Li>
						<S.Li>
							<label>
								<input type="radio" checked={LINK.VIEW === navClicked} />
								<Link to={LINK.VIEW} onClick={() => handleClickNav(LINK.VIEW)}>
									뷰탭&인스타
								</Link>
							</label>
						</S.Li>
						<S.Li>
							<label>
								<input type="radio" checked={LINK.DEVELOP === navClicked} />
								<Link
									to={LINK.DEVELOP}
									onClick={() => handleClickNav(LINK.DEVELOP)}
								>
									홈페이지 제작
								</Link>
							</label>
						</S.Li>
						<S.Li>
							<S.Help>
								<input
									type="radio"
									checked={[LINK.NOTICE, LINK.GUIDE].includes(navClicked)}
								/>
								<span>고객센터</span>
							</S.Help>

							<S.MoreNav>
								<S.MoreLi>
									<label>
										<input type="radio" checked={LINK.NOTICE === navClicked} />
										<Link
											to={LINK.NOTICE}
											onClick={() => setNavClicked(LINK.NOTICE)}
										>
											공지사항
										</Link>
									</label>
								</S.MoreLi>
								<S.MoreLi>
									<label>
										<input type="radio" checked={LINK.GUIDE === navClicked} />
										<Link
											to={LINK.GUIDE}
											onClick={() => setNavClicked(LINK.GUIDE)}
										>
											이용안내
										</Link>
									</label>
								</S.MoreLi>
							</S.MoreNav>
						</S.Li>
					</ul>
				</S.Nav>
			</S.Header>
		</>
	);
}

export default Header;
