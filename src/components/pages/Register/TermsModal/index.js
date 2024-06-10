import useModal from 'hooks/useModal';

import * as S from './index.styles';

import Button from 'components/@common/Button';

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

				<S.ButtonBox>
					<div>
						<Button variant={'default'} size={'default'}>
							동의
						</Button>
					</div>
				</S.ButtonBox>
			</S.Container>
		</S.Background>
	);
}

export default TermsModal;
