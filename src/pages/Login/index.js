import { Link, useNavigate } from 'react-router-dom';

import useInput from 'hooks/useInput';
import useApi from 'hooks/useApi';
import { setCookie } from 'utils/cookie';
import LINK from 'constants/link';

import * as S from './index.styles';

import Logo from 'components/@common/Logo';
import Input from 'components/@common/Input';
import Button from 'components/@common/Button';
import Line from 'components/@common/Line';

function Login() {
	const { handleChange, inputData } = useInput();
	const navigate = useNavigate();

	const { trigger } = useApi({
		path: '/auth/login',
		shouldFetch: false,
	});

	const handleSubmitLogin = async e => {
		e.preventDefault();

		try {
			const res = await trigger({
				method: 'post',
				data: inputData,
			});

			const accessToken = res.data.accessToken;
			const refreshToken = res.data.refreshToken;

			setCookie(accessToken, refreshToken);

			navigate(LINK.HOME);
		} catch (error) {
			console.error('로그인 에러', error);
		}
	};

	return (
		<S.Body>
			<S.LoginBox>
				<div>
					<Logo size="default" />
				</div>

				<div>
					<S.FormBox action="">
						<div>
							<S.InputBox>
								<Input
									type="text"
									name="username"
									size="default"
									variant="login"
									required
									onChange={handleChange}
								/>
								<S.Label htmlFor="id">이메일 또는 아이디 입력</S.Label>
							</S.InputBox>

							<S.InputBox>
								<Input
									type="password"
									name="password"
									size="default"
									variant="login"
									required
									onChange={handleChange}
								/>
								<S.Label htmlFor="password">비밀번호 입력</S.Label>
							</S.InputBox>

							<S.Text></S.Text>
						</div>

						<div>
							<Button
								variant="default"
								size="default"
								onClick={handleSubmitLogin}
							>
								로그인
							</Button>

							<S.LinkBox>
								<Link to={LINK.FIND_ID}>아이디 찾기</Link>
								<Line size="height" variant="gray" />
								<Link to={LINK.FIND_PW}>비밀번호 찾기</Link>
								<Line size="height" variant="gray" />
								<Link to={LINK.REGISTER}>회원가입</Link>
							</S.LinkBox>
						</div>
					</S.FormBox>
				</div>
			</S.LoginBox>

			<S.Bottom>
				<img
					src="./assets/images/login-bottom-img.png"
					alt="login bottom image"
				/>
			</S.Bottom>
		</S.Body>
	);
}

export default Login;
