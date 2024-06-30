import * as S from './index.styles';

function ImgModal({ onClose, src }) {
	return (
		<S.Background>
			<S.Container>
				<S.CloseBtn onClick={onClose} />
				<img src={src} />
			</S.Container>
		</S.Background>
	);
}

export default ImgModal;
