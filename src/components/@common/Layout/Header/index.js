import { useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './index.styles';

import Logo from 'components/@common/Logo';

function Header() {
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(prev => !prev);
	};
	return (
		<>
			<S.Header>
				<S.TopBox>
					<S.ImgBox>
						<Link to={'/main'}>
							<Logo size={'header'} white />
						</Link>
					</S.ImgBox>

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
								<Link to={'/review'}>리뷰</Link>
							</label>
						</S.Li>
						<S.Li>
							<label htmlFor="review-team">
								<input type="radio" />
								<Link to={'/review_team'}>체험단</Link>
							</label>
						</S.Li>
						<S.Li>
							<label htmlFor="view-Instagram">
								<input type="radio" />
								<Link to={'/view_instagram'}>뷰탭&인스타</Link>
							</label>
						</S.Li>
						<S.Li>
							<label htmlFor="web-creation">
								<input type="radio" />
								<Link to={'/web_creation'}>홈페이지 제작</Link>
							</label>
						</S.Li>
						<S.Li>
							<label htmlFor="help">
								<input type="radio" />
								<span>고객센터</span>
							</label>

							<S.MoreNav>
								<li>
									<label htmlFor="notice">
										<input type="radio" />
										<Link to={'/main'}>공지사항</Link>
									</label>
								</li>
								<li>
									<label htmlFor="guide">
										<input type="radio" />
										<Link to={'/main'}>이용안내</Link>
									</label>
								</li>
							</S.MoreNav>
						</S.Li>
					</ul>
				</S.Nav>
			</S.Header>
		</>
	);
}

export default Header;
