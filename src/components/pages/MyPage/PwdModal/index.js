import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useInput from 'hooks/useInput';
import useModal from 'hooks/useModal';
import useApi from 'hooks/useApi';
import LINK from 'constants/link';
import MESSAGE from 'constants/message';
import VALIDATE from 'utils/regex';

import * as S from './index.styles';

import Input from 'components/@common/Input';
import Button from 'components/@common/Button';
import Modal from 'components/@common/Modal';

function PwdModal(props) {
	const { onClose, userId } = props;

	const navigate = useNavigate();

	const [match, setMatch] = useState('');

	const { handleChange, inputData } = useInput();
	const { modalState, closeModal, openModal } = useModal();

	const { password, newPassword, newPwCheck } = inputData;

	const { trigger: matchTrigger } = useApi({
		path: `/users/password-match/${userId}`,
		method: 'post',
		shouldFetch: false,
	});

	const { trigger: updateTrigger } = useApi({
		path: `/users/update-password/${userId}`,
		method: 'patch',
		shouldFetch: false,
	});

	const currentPw = useRef(null);
	const newPw = useRef(null);
	const checkPw = useRef(null);

	const handleChangePw = async () => {
		// 1. 현재 비밀번호가 입력됐는지 확인
		if (password) {
			// 2. 현재 비밀번호가 맞는지 확인 api -> match
			try {
				const matchResult = await matchTrigger({ data: { password } });

				if (matchResult.data) {
					// 3. 맞다면 새 비밀번호가 입력됐는지 확인 / 틀리다면 메세지
					newPw.current.focus();
					if (newPassword) {
						// 4. 새 비밀번호 확인이 입력됐는지 확인

						if (newPassword && newPassword.match(VALIDATE.password)) {
							if (newPwCheck) {
								checkPw.current.focus();
								// 5. 새 비밀번호와 새 비밀번호 확인이 일치하는지 확인
								if (newPassword === newPwCheck) {
									const data = {
										password,
										newPassword,
									};

									// 6. 비밀번호 업데이트 api -> update
									const updateResult = await updateTrigger({ data });

									// 7. 비밀번호 변경됐다는 openModal
									if (updateResult.data) {
										return openModal();
									}
								} else {
									checkPw.current.focus();
									setMatch(MESSAGE.PASSWORD.CHECK);
								}
							} else {
								checkPw.current.focus();
								setMatch(MESSAGE.PASSWORD.NEW_CHECK);
							}
						} else {
							newPw.current.focus();
							setMatch(MESSAGE.JOIN.PW_REGEX);
						}
					} else {
						newPw.current.focus();
						setMatch(MESSAGE.PASSWORD.NEW);
					}
				} else {
					currentPw.current.focus();
					setMatch(MESSAGE.PASSWORD.FAIL);
				}
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
					onClose={() => handleCloseModal()}
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
							ref={currentPw}
							onChange={handleChange}
						/>
						<Input
							variant="default"
							size="height"
							placeholder="새 비밀번호"
							name="newPassword"
							type="password"
							ref={newPw}
							onChange={handleChange}
						/>
						<Input
							variant="default"
							size="height"
							placeholder="새 비밀번호 확인"
							name="newPwCheck"
							type="password"
							ref={checkPw}
							onChange={handleChange}
						/>
					</S.InputBox>

					<S.Span>{match}</S.Span>
				</S.Body>

				<S.ButtonBox>
					<Button size="height" variant="white" onClick={onClose}>
						취소
					</Button>
					<Button size="height" variant="default" onClick={handleChangePw}>
						확인
					</Button>
				</S.ButtonBox>
			</S.Container>
		</S.Background>
	);
}

export default PwdModal;
