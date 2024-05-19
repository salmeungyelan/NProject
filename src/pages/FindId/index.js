import { Link } from 'react-router-dom';

import useLayout from 'hooks/useLayout';

import * as S from './index.styles';
import Input from 'components/@common/Input';
import Logo from 'components/@common/Logo';
import Button from 'components/@common/Button';

function FindId() {
	useLayout();

	return (
		<>
			<S.Body>
				<S.Top>
					<S.LogoBox>
						<Link to="/">
							<Logo size={'default'} />
						</Link>
					</S.LogoBox>

					<S.FormBox action="">
						<S.InputBox>
							<S.Title>업체명</S.Title>
							<Input
								size={'default'}
								type="text"
								autoComplete="off"
								placeholder="업체명을 입력해 주세요."
								required
							/>
						</S.InputBox>

						<S.InputBox>
							<S.Title>전화번호</S.Title>
							<Input
								size={'default'}
								type="text"
								autoComplete="off"
								placeholder="전화번호를 입력해 주세요."
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
								아이디 찾기
							</Button>
						</S.ButtonBox>
					</S.FormBox>
				</S.Top>

				<S.Bottom>
					<img src="/assets/images/ID-bottom-image.png" />
				</S.Bottom>
			</S.Body>
		</>
	);
}

export default FindId;
