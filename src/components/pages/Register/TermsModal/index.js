import * as S from './index.styles';

import Button from 'components/@common/Button';

function TermsModal(props) {
	const { title, content, onClose } = props;

	const handleClose = () => {
		onClose();
	};

	return (
		<>
			<S.Background>
				<S.Container>
					<S.Header>
						<S.Title>{title}</S.Title>
						<S.CloseBtn onClick={handleClose} />
					</S.Header>

					<S.Body>
						<pre>{content}</pre>
					</S.Body>

					<S.ButtonBox>
						<div>
							<Button variant="default" size="default">
								동의
							</Button>
						</div>
					</S.ButtonBox>
				</S.Container>
			</S.Background>
		</>
	);
}

export default TermsModal;
