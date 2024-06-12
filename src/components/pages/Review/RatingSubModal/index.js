import useModal from 'hooks/useModal';

import * as S from './index.styles';

import Button from 'components/@common/Button';
import Input from 'components/@common/Input';

function RatingSubModal() {
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

				<S.Body>
					<span>{modalDataState.content}</span>

					<div>
						<img src="/assets/icons/star.svg" />
						<img src="/assets/icons/star.svg" />
						<img src="/assets/icons/star.svg" />
						<img src="/assets/icons/star.svg" />
						<img src="/assets/icons/star.svg" />
					</div>
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

export default RatingSubModal;
