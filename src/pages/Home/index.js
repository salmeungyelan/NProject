import { Link } from 'react-router-dom';

import useLayout from 'hooks/useLayout';

import * as S from './index.styles';

import Logo from 'components/@common/Logo';
import Input from 'components/@common/Input';
import Button from 'components/@common/Button';
import Line from 'components/@common/Line';

function Home() {
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
									variant={'login'}
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
									variant={'login'}
									required
								/>
								<S.Label htmlFor="password">비밀번호 입력</S.Label>
							</S.InputBox>

							<S.Text></S.Text>
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
								<Link to="/find_id">아이디 찾기</Link>
								<Line size={'height'} variant={'gray'} />
								<Link to="/find_password">비밀번호 찾기</Link>
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
