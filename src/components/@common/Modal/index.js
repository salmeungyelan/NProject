import useModal from 'hooks/useModal';

import * as S from './index.styles';

import Button from '../Button';

function Modal() {
	const { modalDataState, closeModal } = useModal();

	if (!modalDataState.isOpen) {
		return null;
	}

	return (
		<S.Background>
			<S.Container>
				<S.Header>
					<img src={modalDataState.img} />
					<S.Title>{modalDataState.title}</S.Title>

					<S.Body>{modalDataState.content}</S.Body>
				</S.Header>

				<S.ButtonBox>
					<Button
						variant={'orange'}
						shape={'default'}
						size={'default'}
						onClick={closeModal}
					>
						확인
					</Button>
				</S.ButtonBox>
			</S.Container>
		</S.Background>
	);
}

export default Modal;
