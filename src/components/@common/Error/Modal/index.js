import { useGlobalState } from 'contexts/GlobalContext';

import * as S from './../../Modal/index.styles';

import Button from 'components/@common/Button';

function ErrorModal() {
	const { hasErrorMessage, setHasErrorMessage } = useGlobalState();

	const handleCloseModal = () => {
		setHasErrorMessage('');
	};

	return hasErrorMessage ? (
		<S.Background>
			<S.Container>
				<S.Header>
					<img src="/assets/icons/modal-excl.svg" />
					<S.Title>알림</S.Title>

					<S.Body>{hasErrorMessage}</S.Body>
				</S.Header>

				<S.ButtonBox>
					<Button size="default" variant="default" onClick={handleCloseModal}>
						확인
					</Button>
				</S.ButtonBox>
			</S.Container>
		</S.Background>
	) : null;
}

export default ErrorModal;
