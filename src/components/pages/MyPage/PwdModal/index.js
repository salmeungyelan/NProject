import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useInput from 'hooks/useInput';
import useApi from 'hooks/useApi';
import MESSAGE from 'constants/message';
import useModal from 'hooks/useModal';
import LINK from 'constants/link';

import * as S from './index.styles';

import Button from 'components/@common/Button';
import Input from 'components/@common/Input';
import Modal from 'components/@common/Modal';

function PwdModal({ onClose, userId }) {
	const navigate = useNavigate();

	const [match, setMatch] = useState('');

	const { handleChange, inputData } = useInput();
	const { modalState, closeModal, openModal } = useModal();

	const { password, newPassword, newPwCheck } = inputData;

	const { trigger: matchTrigger } = useApi({
		path: `/users/password-match/${userId}`,
		shouldFetch: false,
	});

	const { trigger: updateTrigger } = useApi({
		path: `/users/update-password/${userId}`,
		shouldFetch: false,
	});

	useEffect(() => {
		console.log(userId);
		console.log(inputData);
	}, [inputData, userId]);

	// 1. 현재 비밀번호가 입력됐는지 확인
	// 2. 현재 비밀번호가 맞는지 확인 api -> match
	// 3. 맞다면 새 비밀번호가 입력됐는지 확인 / 틀리다면 메세지
	// 4. 새 비밀번호 확인이 입력됐는지 확인
	// 5. 새 비밀번호와 새 비밀번호 확인이 일치하는지 확인
	// 6. 비밀번호 업데이트 api -> update
	// 7. 비밀번호 변경됐다는 openModal
	// 8. 모달 닫으면 다시 마이페이지로 이동

	const handleChangePw = async () => {
		// 1. 현재 비밀번호가 입력됐는지 확인
		if (password) {
			// 2. 현재 비밀번호가 맞는지 확인 api -> match

			try {
				const req = await matchTrigger({
					method: 'post',
					data: { password },
				});

				if (req.data) {
					// 3. 맞다면 새 비밀번호가 입력됐는지 확인 / 틀리다면 메세지
					if (newPassword) {
						// 4. 새 비밀번호 확인이 입력됐는지 확인
						if (newPwCheck) {
							// 5. 새 비밀번호와 새 비밀번호 확인이 일치하는지 확인
							if (newPassword === newPwCheck) {
								const data = {
									password,
									newPassword,
								};

								// 6. 비밀번호 업데이트 api -> update
								const request = await updateTrigger({
									method: 'patch',
									data,
								});

								// 7. 비밀번호 변경됐다는 openModal
								if (request.data) return openModal();
							} else setMatch(MESSAGE.PASSWORD.CHECK);
						} else setMatch(MESSAGE.PASSWORD.NEW_CHECK);
					} else setMatch(MESSAGE.PASSWORD.NEW);
				} else setMatch(MESSAGE.PASSWORD.FAIL);
			} catch (error) {
				setMatch(MESSAGE.PASSWORD.FAIL);
			}
		}
	};

	// 8. 모달 닫으면 다시 마이페이지로 이동
	const handleCloseModal = () => {
		navigate(LINK.MY);
		onClose();
		closeModal();
	};

	return (
		<S.Background>
			{modalState && (
				<Modal
					img="modal-check.svg"
					title="알림"
					content={MESSAGE.PASSWORD.FIN}
					onClose={handleCloseModal}
				/>
			)}

			<S.Container>
				<S.Header>
					<S.Title>비밀번호 변경</S.Title>
					<S.CloseBtn onClick={onClose} />
				</S.Header>

				<S.Body>
					<S.InputBox>
						<p>비밀번호</p>
						<Input
							variant="default"
							size="height"
							placeholder="현재 비밀번호"
							name="password"
							type="password"
							onChange={handleChange}
						/>
						<Input
							variant="default"
							size="height"
							placeholder="새 비밀번호"
							name="newPassword"
							type="password"
							onChange={handleChange}
						/>
						<Input
							variant="default"
							size="height"
							placeholder="새 비밀번호 확인"
							name="newPwCheck"
							type="password"
							onChange={handleChange}
						/>
					</S.InputBox>

					<S.Span>{match}</S.Span>
				</S.Body>

				<S.ButtonBox>
					<Button variant="white" size="height" onClick={onClose}>
						취소
					</Button>
					<Button variant="default" size="height" onClick={handleChangePw}>
						확인
					</Button>
				</S.ButtonBox>
			</S.Container>
		</S.Background>
	);
}

export default PwdModal;
