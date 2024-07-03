import * as S from './index.styles';

function MediaModal(props) {
	const { onClose, src, type } = props;

	// 비디오 여부 확인
	const video = type.includes('video', 'mp4');

	return (
		<S.Background>
			<S.Container>
				<S.CloseBtn onClick={onClose} />
				{!video && <img src={src} />}
				{video && <video controls={true} autoPlay={true} src={src} />}
			</S.Container>
		</S.Background>
	);
}

export default MediaModal;
