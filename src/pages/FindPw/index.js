import { Link } from 'react-router-dom';

import useLayout from 'hooks/useLayout';

import * as S from './index.styles';
import Input from 'components/@common/Input';
import Logo from 'components/@common/Logo';
import Button from 'components/@common/Button';

function FindPw() {
	useLayout();

	return (
		<S.Body>
			<S.Top>
				<S.LogoBox>
					<Link to="/">
						<Logo size={'default'} />
					</Link>
				</S.LogoBox>

				<S.FormBox action="">
					<S.InputBox>
						<S.Title>아이디</S.Title>
						<Input
							size={'default'}
							type="text"
							autoComplete="off"
							placeholder="아이디를 입력해 주세요."
							required
						/>
					</S.InputBox>

					<S.InputBox>
						<S.Title>이메일</S.Title>
						<Input
							size={'default'}
							type="text"
							autoComplete="off"
							placeholder="이메일을 입력해 주세요."
							required
						/>
					</S.InputBox>

					<S.InputBox>
						<S.Title>사업자 등록 번호</S.Title>
						<Input
							size={'default'}
							type="text"
							autoComplete="off"
							placeholder="사업자 등록 번호를 입력해 주세요."
							required
						/>
					</S.InputBox>

					<S.ButtonBox>
						<S.Notice>
							<img src="/assets/images/x_button.svg" alt="" />
							<p>올바르지 않은 계정 정보입니다.</p>
						</S.Notice>

						<Button
							shape={'default'}
							variant={'default'}
							size={'default'}
							type="submit"
						>
							비밀번호 찾기
						</Button>
					</S.ButtonBox>
				</S.FormBox>
			</S.Top>

			<S.Bottom>
				<img src="/assets/images/Pw-bottom-image.png" />
			</S.Bottom>
		</S.Body>
	);
}

export default FindPw;
