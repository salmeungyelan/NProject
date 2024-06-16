import useModal from 'hooks/useModal';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import Button from 'components/@common/Button';
import InputBox from 'components/@common/InputBox';
import Address from 'components/@common/Address';
import PwdChangeModal from 'components/pages/MyPage/PwdChangeModal';

function MyPage() {
	const { openModal } = useModal();

	const handleOpenPwdModal = () => {
		openModal({
			img: '',
			title: '',
			content: '',
			callback: () => console.log('closed'),
		});
	};

	return (
		<S.Body>
			<PwdChangeModal />

			<Title title={'MY PAGE'}>회원 정보를 수정할 수 있습니다.</Title>

			<div>
				<S.Account>
					<S.InfoBox>
						<InputBox title="이메일" value="olive@hawngum.com" disabled />
					</S.InfoBox>

					<S.InfoBox>
						<InputBox title="아이디" value="olive" disabled />
					</S.InfoBox>

					<S.InfoBox>
						<InputBox title="비밀번호" value="olive" check readOnly />

						<S.PwBtn>
							<Button
								size={'height'}
								variant={'default'}
								onClick={handleOpenPwdModal}
							>
								비밀번호 변경하기
							</Button>
						</S.PwBtn>
					</S.InfoBox>

					<S.InfoBox>
						<InputBox title="업체명" value="황금올리브" disabled />
					</S.InfoBox>

					<S.InfoBox>
						<InputBox title="전화번호" value="010-1234-1234" disabled />
					</S.InfoBox>

					<S.InfoBox>
						<Address
							number="12345"
							address="삼각지"
							detail="107호, 108호"
							disabled
						/>
					</S.InfoBox>

					<S.InfoBox>
						<InputBox title="사업자 등록 번호" value="123-12-12345" disabled />
					</S.InfoBox>

					<S.InfoBox>
						<InputBox
							title="스마트 플레이스 링크"
							value="https://naver.com"
							disabled
						/>
					</S.InfoBox>
				</S.Account>

				<S.Notice>
					비밀번호를 제외한 나머지 정보 변경은 관리자에게 문의해 주세요.
				</S.Notice>
			</div>
		</S.Body>
	);
}

export default MyPage;
