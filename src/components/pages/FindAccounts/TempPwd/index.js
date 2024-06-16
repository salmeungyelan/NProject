import * as S from './index.styles';

import Button from 'components/@common/Button';
import InputBox from 'components/@common/InputBox';

function TempPwd() {
	return (
		<S.FormBox>
			<div>
				<InputBox
					title="임시 비밀번호"
					value="귀엽지사랑스럽지예쁘지"
					register
					disabled
				/>

				<S.Message>
					임시 비밀번호가 발급되었습니다.
					<br />
					로그인 후 마이페이지에서 비밀번호를 변경해 주세요.
				</S.Message>
			</div>

			<Button size={'default'} variant={'default'}>
				로그인
			</Button>
		</S.FormBox>
	);
}

export default TempPwd;
