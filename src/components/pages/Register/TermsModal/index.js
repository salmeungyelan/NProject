import { useEffect, useState } from 'react';

import useApi from 'hooks/useApi';

import * as S from './index.styles';

import Button from 'components/@common/Button';

function TermsModal(props) {
	const { id, onClose } = props;

	const [data, setData] = useState({});

	const { result } = useApi({
		path: `/client/terms/${id}`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setData(result.data);
		}
	}, [result.data]);

	const handleAgree = () => {
		onClose(true); // 동의 상태로 모달 닫기
	};

	const handleDisagree = () => {
		onClose(); // 동의하지 않은 상태로 모달 닫기
	};

	return (
		<S.Background>
			<S.Container>
				<S.Header>
					<S.Title>넷플레이스 - {data.name}</S.Title>
					<S.CloseBtn onClick={handleDisagree} />
				</S.Header>

				<S.Body>
					<pre>{data.description}</pre>
				</S.Body>

				<S.ButtonBox>
					<div>
						<Button variant="default" size="default" onClick={handleAgree}>
							동의
						</Button>
					</div>
				</S.ButtonBox>
			</S.Container>
		</S.Background>
	);
}

export default TermsModal;
