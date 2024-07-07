import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useInput from 'hooks/useInput';
import useApi from 'hooks/useApi';
import { setCookie } from 'utils/cookie';
import LINK from 'constants/link';
import MESSAGE from 'constants/message';

import * as S from './index.styles';

import Logo from 'components/@common/Logo';
import Input from 'components/@common/Input';
import Button from 'components/@common/Button';
import Line from 'components/@common/Line';

function Login() {
	const { handleChange, inputData } = useInput();

	const navigate = useNavigate();

	const idRef = useRef(null);
	const pwRef = useRef(null);

	const [errorMessage, setErrorMessage] = useState('');

	const { result, trigger } = useApi({
		path: '/auth/login',
		shouldFetch: false,
	});

	const handleSubmitLogin = async e => {
		e.preventDefault();

		if (!inputData.username) {
			idRef.current.focus();
			return setErrorMessage(MESSAGE.LOGIN.ID);
		}

		if (!inputData.password) {
			pwRef.current.focus();
			return setErrorMessage(MESSAGE.LOGIN.PW);
		}

		try {
			const name = inputData.username.includes('@') ? 'email' : 'username';

			const data = {
				[name]: inputData.username,
				password: inputData.password,
			};

			await trigger({
				method: 'post',
				data,
				applyResult: true,
			});

			const { accessToken, refreshToken } = result.data;
			setCookie(accessToken, refreshToken);
			navigate(LINK.HOME);
		} catch (error) {
			setErrorMessage(MESSAGE.LOGIN.FAILURE);
		}
	};

	return (
		<S.Body>
			<S.LoginBox>
				<div>
					<Link to={LINK.LOGIN}>
						<Logo size="default" />
					</Link>
				</div>

				<div>
					<S.FormBox onSubmit={handleSubmitLogin}>
						<div>
							<S.InputBox>
								<Input
									id="username"
									name="username"
									value={inputData.username}
									placeholder=""
									onChange={handleChange}
									size="default"
									variant="login"
								/>
								<S.Label htmlFor="username" ref={idRef}>
									이메일 또는 아이디 입력
								</S.Label>
							</S.InputBox>

							<S.InputBox>
								<Input
									id="password"
									type="password"
									name="password"
									value={inputData.password}
									placeholder=""
									onChange={handleChange}
									size="default"
									variant="login"
								/>
								<S.Label htmlFor="password" ref={pwRef}>
									비밀번호 입력
								</S.Label>
							</S.InputBox>

							{errorMessage.includes('/') ? (
								<S.Text>
									{errorMessage.split('/')[0]}
									<br />
									{errorMessage.split('/')[1]}
								</S.Text>
							) : (
								<S.Text>{errorMessage}</S.Text>
							)}
						</div>

						<div>
							<Button size="default" variant="default" type="submit">
								로그인
							</Button>

							<S.LinkBox>
								<Link to={LINK.FIND_ID}>아이디 찾기</Link>
								<Line size="login" variant="gray" />
								<Link to={LINK.FIND_PW}>비밀번호 찾기</Link>
								<Line size="login" variant="gray" />
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
