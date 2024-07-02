import { useNavigate } from 'react-router-dom';

import LINK from 'constants/link';

import * as S from './index.styles';

import InputBox from 'components/@common/InputBox';
import Button from 'components/@common/Button';

function IdResult({ data }) {
	const navigate = useNavigate();

	const handleClickLogin = () => {
		navigate(LINK.LOGIN);
	};

	const { email, username } = data;

	return (
		<S.Body>
			<div>
				<InputBox title="이메일" value={email} disabled register />

				<InputBox title="아이디" value={username} disabled register />
			</div>

			<Button
				size="default"
				variant="default"
				onClick={() => handleClickLogin()}
			>
				로그인
			</Button>
		</S.Body>
	);
}

export default IdResult;
