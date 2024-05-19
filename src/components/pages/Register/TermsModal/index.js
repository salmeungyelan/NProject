import { useModal } from 'hooks/useModal';
import * as S from './index.styles';

function TermsModal() {
	const { modalDataState, closeModal } = useModal();

	if (!modalDataState.isOpen) {
		return null;
	}

	return (
		<S.Background>
			<S.Container>
				<S.Header>
					<S.Title>{modalDataState.title}</S.Title>
					<S.CloseBtn onClick={closeModal} />
				</S.Header>
				<S.Body>{modalDataState.content}</S.Body>
				<S.CheckBox>
					<input type="checkbox" />
					<p>동의합니다.</p>
				</S.CheckBox>
			</S.Container>
		</S.Background>
	);
}

export default TermsModal;
