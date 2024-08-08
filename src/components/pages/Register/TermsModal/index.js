import * as S from './index.styles';

import Button from 'components/@common/Button';

function TermsModal(props) {
	const { content, onClose } = props;

	const handleAgree = () => {
		onClose(true);
	};

	const handleDisagree = () => {
		onClose();
	};

	return (
		<S.Background>
			<S.Container>
				<S.Header>
					<S.Title>넷플레이스 - {content.name}</S.Title>
					<S.CloseBtn onClick={handleDisagree} />
				</S.Header>

				<S.Body>
					<pre>{content.description}</pre>
				</S.Body>

				<S.ButtonBox>
					<div>
						<Button size="default" variant="default" onClick={handleAgree}>
							동의
						</Button>
					</div>
				</S.ButtonBox>
			</S.Container>
		</S.Background>
	);
}

export default TermsModal;
