import { Link } from 'react-router-dom';

import useModal from 'hooks/useModal';
import LINK from 'constants/link';

import * as S from './index.styles';

import Logo from 'components/@common/Logo';
import Line from 'components/@common/Line';
import Address from 'components/@common/Address';
import InputBox from 'components/@common/InputBox';
import Button from 'components/@common/Button';
import TermsModal from 'components/pages/Register/TermsModal';

function Register() {
	const { modalState, openModal, closeModal } = useModal();

	const handleOpenModal = () => {
		openModal();
	};

	const handleCloseModal = () => {
		closeModal();
	};

	return (
		<S.Body>
			<S.LogoBox>
				<Link to={LINK.LOGIN}>
					<Logo size="default" />
				</Link>
			</S.LogoBox>

			<S.FormBox action="">
				<InputBox
					title="이메일 입력"
					placeholder="이메일을 입력해 주세요."
					message
					register
				/>

				<InputBox
					title="아이디 입력"
					placeholder="아이디는 영어와 숫자로만 입력해 주세요."
					message
					register
				/>

				<InputBox
					title="비밀번호 입력"
					placeholder="비밀번호를 입력해 주세요."
					message
					type="password"
					register
				/>

				<InputBox
					title="비밀번호 확인"
					placeholder="비밀번호를 입력해 주세요."
					message
					type="password"
					register
				/>

				<InputBox
					title="업체명"
					placeholder="업체명을 입력해 주세요."
					message
					register
				/>

				<InputBox
					title="전화번호"
					placeholder="전화번호를 입력해 주세요."
					message
					register
				/>

				<Address message register button />

				<InputBox
					title="사업자 등록 번호"
					placeholder="업체의 사업자 등록 번호를 입력해 주세요."
					message
					register
				/>

				<S.CheckBox>
					<S.H1>약관동의</S.H1>
					<S.Check>
						<S.CheckAll>
							<input type="checkbox" name="" id="check" />
							<label htmlFor="check" />
							<h1>전체동의</h1>
						</S.CheckAll>
						<Line size="width" variant="lightGray" />
						<S.CheckItem>
							<input type="checkbox" name="" id="check_1" />
							<label htmlFor="check_1" />
							<p onClick={handleOpenModal}>
								개인정보 제공 및 활용에 동의합니다.
							</p>
							<span className="text_color">(필수)</span>
						</S.CheckItem>
						<S.CheckItem>
							<input type="checkbox" name="" id="check_2" />
							<label htmlFor="check_2" />
							<p onClick={handleOpenModal}>서비스 이용 약관에 동의합니다.</p>
							<span className="text_color">(필수)</span>
						</S.CheckItem>
					</S.Check>
				</S.CheckBox>

				{modalState && (
					<TermsModal
						title="넷플레이스 - 메타 서비스 이용 약관"
						content="example"
						onClose={handleCloseModal}
					/>
				)}

				<S.ButtonBox>
					<Button size="default" variant="default" type="submit">
						회원가입
					</Button>
				</S.ButtonBox>
			</S.FormBox>
		</S.Body>
	);
}

export default Register;
