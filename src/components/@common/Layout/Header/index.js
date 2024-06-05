import { Link } from 'react-router-dom';

import * as S from './index.styles';

import Logo from 'components/@common/Logo';

function Header() {
	return (
		<>
			<S.Header>
				<S.TopBox>
					<div>
						<Logo size={'header'} />
					</div>

					<S.WelcomeText>
						<p>
							<strong>황올컴퍼니</strong> 님 환영합니다!
						</p>
					</S.WelcomeText>

					<S.ButtonBox>
						<S.Logout>LOGOUT</S.Logout>
						<S.MyPage>MY PAGE</S.MyPage>
					</S.ButtonBox>
				</S.TopBox>
			</S.Header>

			<S.Nav>
				<ul>
					<S.Li>
						<label htmlFor="home">
							<input type="radio" />
							<Link to={'/main'}>홈</Link>
						</label>
					</S.Li>
					<S.Li>
						<label htmlFor="review">
							<input type="radio" />
							<Link to={'/main'}>리뷰</Link>
						</label>
					</S.Li>
					<S.Li>
						<label htmlFor="example">
							<input type="radio" />
							<Link to={'/main'}>체험단</Link>
						</label>
					</S.Li>
					<S.Li>
						<label htmlFor="view-Insta">
							<input type="radio" />
							<Link to={'/main'}>뷰탭&인스타</Link>
						</label>
					</S.Li>
					<S.Li>
						<label htmlFor="homepage">
							<input type="radio" />
							<Link to={'/main'}>홈페이지 제작</Link>
						</label>
					</S.Li>
					<S.Li>
						<label htmlFor="help">
							<input type="radio" />
							<Link to={'/main'}>고객센터</Link>
						</label>

						<S.MoreNav>
							<li>
								<label htmlFor="rhdwltkgkd">
									<input type="radio" />
									<Link to={'/main'}>공지사항</Link>
								</label>
							</li>
							<li>
								<label htmlFor="dldyddksso">
									<input type="radio" />
									<Link to={'/main'}>이용안내</Link>
								</label>
							</li>
						</S.MoreNav>
					</S.Li>
				</ul>
			</S.Nav>
		</>
	);
}

export default Header;
