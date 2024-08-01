import * as S from './index.styles';

import Button from '../Button';

function Modal(props) {
	const { img, title, content, onClose, otherTabs } = props;

	return (
		<S.Background $otherTabs={otherTabs}>
			<S.Container>
				<S.Header>
					<img src={`/assets/icons/${img}`} />
					<S.Title>{title}</S.Title>

					<S.Body>{content}</S.Body>
				</S.Header>

				<S.ButtonBox>
					<Button size="default" variant="default" onClick={onClose}>
						확인
					</Button>
				</S.ButtonBox>
			</S.Container>
		</S.Background>
	);
}

export default Modal;
