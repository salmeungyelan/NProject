import useModal from 'hooks/useModal';

import * as S from './index.styles';

import Button from 'components/@common/Button';
import Input from 'components/@common/Input';

function PwdChangeModal() {
	const { modalDataState, closeModal } = useModal();

	if (!modalDataState.isOpen) {
		return null;
	}

	return (
		<S.Background>
			<S.Container>
				<S.Header>
					<S.Title>비밀번호 변경</S.Title>
					<S.CloseBtn onClick={closeModal} />
				</S.Header>

				<S.Body>
					<S.InputBox>
						<p>비밀번호</p>
						<Input
							variant={'default'}
							size={'height'}
							placeholder={'현재 비밀번호'}
						/>
						<Input
							variant={'default'}
							size={'height'}
							placeholder={'새 비밀번호'}
						/>
						<Input
							variant={'default'}
							size={'height'}
							placeholder={'새 비밀번호 확인'}
						/>
					</S.InputBox>

					<span>비밀번호가 일치하지 않습니다.</span>
				</S.Body>

				<S.ButtonBox>
					<Button variant={'white'} size={'height'} onClick={closeModal}>
						취소
					</Button>
					<Button variant={'default'} size={'height'}>
						확인
					</Button>
				</S.ButtonBox>
			</S.Container>
		</S.Background>
	);
}

export default PwdChangeModal;
