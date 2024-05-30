import { Link } from 'react-router-dom';

import useLayout from 'hooks/useLayout';

import * as S from './index.styles';

import Logo from 'components/@common/Logo';
import Input from 'components/@common/Input';
import Button from 'components/@common/Button';
import Line from 'components/@common/Line';

function Home() {
	useLayout();

	return (
		<S.Body>
			<S.LoginBox>
				<div>
					<Logo size={'default'} />
				</div>

				<div>
					<S.FormBox action="">
						<div>
							<S.InputBox>
								<Input
									type="text"
									id="id"
									autoComplete="off"
									size={'default'}
									required
								/>
								<S.Label htmlFor="id">이메일 또는 아이디 입력</S.Label>
							</S.InputBox>

							<S.InputBox>
								<Input
									type="password"
									id="pw"
									autoComplete="off"
									size={'default'}
									required
								/>
								<S.Label htmlFor="password">비밀번호 입력</S.Label>
							</S.InputBox>

							<S.Text>
								아이디 또는 비밀번호를 잘못 입력했습니다.
								<br />
								입력한 내용을 다시 확인해 주세요.
							</S.Text>
						</div>

						<div>
							<Button
								variant={'default'}
								shape={'default'}
								size={'default'}
								type="submit"
							>
								로그인
							</Button>

							<S.LinkBox>
								<Link to="/find/id">아이디 찾기</Link>
								<Line size={'height'} variant={'gray'} />
								<Link to="/find/password">비밀번호 찾기</Link>
								<Line size={'height'} variant={'gray'} />
								<Link to="/register">회원가입</Link>
							</S.LinkBox>
						</div>
					</S.FormBox>
				</div>
			</S.LoginBox>

			<S.Bottom>
				<img src="./assets/images/login-bottom-img.png" />
			</S.Bottom>
		</S.Body>
	);
}

export default Home;
