import { useEffect, useState } from 'react';

import useModal from 'hooks/useModal';
import decodeJWT from 'utils/token';
import useApi from 'hooks/useApi';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import Button from 'components/@common/Button';
import InputBox from 'components/@common/InputBox';
import Address from 'components/@common/Address';
import PwdModal from 'components/pages/MyPage/PwdModal';

function MyPage() {
	const { modalState, openModal, closeModal } = useModal();

	const handleOpenPwdModal = () => {
		openModal();
	};

	const handleCloseModal = () => {
		closeModal();
	};

	const decodedPayload = decodeJWT();
	const { sub } = decodedPayload;

	const { result, isLoading } = useApi({
		path: `/users/${sub}`,
		shouldFetch: true,
	});

	const [user, setUser] = useState({});

	useEffect(() => {
		closeModal();
	}, []);

	useEffect(() => {
		if (result.data) {
			setUser(result.data);
		}
	}, [result.data]);

	const {
		email,
		username,
		companyName,
		contactNumber,
		postalCode,
		address,
		addressDetail,
		businessNumber,
		smartplaceLink,
	} = user;

	return (
		<S.Body>
			{modalState && <PwdModal onClose={handleCloseModal} userId={sub} />}

			<Title title={'MY PAGE'}>회원 정보를 수정할 수 있습니다.</Title>

			<div>
				<S.Account>
					<S.InfoBox>
						<InputBox title="이메일" value={email || ''} disabled />
					</S.InfoBox>

					<S.InfoBox>
						<InputBox title="아이디" value={username || ''} disabled />
					</S.InfoBox>

					<S.InfoBox>
						<InputBox title="비밀번호" value="00000" type="password" readOnly />

						<S.PwBtn>
							<Button
								size="height"
								variant="default"
								onClick={handleOpenPwdModal}
							>
								비밀번호 변경하기
							</Button>
						</S.PwBtn>
					</S.InfoBox>

					<S.InfoBox>
						<InputBox title="업체명" value={companyName || ''} disabled />
					</S.InfoBox>

					<S.InfoBox>
						<InputBox title="전화번호" value={contactNumber || ''} disabled />
					</S.InfoBox>

					<S.InfoBox>
						<Address
							number={postalCode || ''}
							address={address || ''}
							detail={addressDetail || ''}
							disabled
						/>
					</S.InfoBox>

					<S.InfoBox>
						<InputBox
							title="사업자 등록 번호"
							value={businessNumber || ''}
							disabled
						/>
					</S.InfoBox>

					<S.InfoBox>
						<InputBox
							title="스마트 플레이스 링크"
							value={smartplaceLink || ''}
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
