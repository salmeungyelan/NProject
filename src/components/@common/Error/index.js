import * as S from './index.styles';

import Button from '../Button';
import { useNavigate } from 'react-router-dom';

function ErrorFallback({ error }) {
	console.log(error);

	const navigate = useNavigate();

	const HandleClickToMain = () => {
		navigate('/main');
	};

	const HandleClickToBack = () => {
		navigate(-1);
	};

	return (
		<S.Body>
			<S.Top>
				<S.ImgBox>
					<img src="/assets/icons/error.svg" />
				</S.ImgBox>

				<div>
					<S.Title>죄송합니다. 원하시는 페이지를 찾을 수 없습니다.</S.Title>

					<S.Content>
						존재하지 않는 주소가 잘못 입력하셨거나,
						<br />
						요청하신 페이지의 주소가 변경 혹은 삭제되어 찾을 수 없습니다.
						<br />
						입력하신 페이지의 주소가 정확한지 다시 한 번 확인해 주세요.
					</S.Content>
				</div>
			</S.Top>

			<S.ButtonBox>
				<Button variant={'white'} size={'error'} onClick={HandleClickToBack}>
					이전으로
				</Button>
				<Button variant={'default'} size={'error'} onClick={HandleClickToMain}>
					메인으로
				</Button>
			</S.ButtonBox>
		</S.Body>
	);
}

export default ErrorFallback;
