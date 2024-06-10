import * as S from './index.styles';

import Input from 'components/@common/Input';
import Button from 'components/@common/Button';

function TempPwd() {
	return (
		<S.FormBox>
			<div>
				<S.InputBox>
					<S.H1>임시 비밀번호</S.H1>
					<Input
						size={'default'}
						variant={'default'}
						value={'귀엽지사랑스럽지예쁘지'}
						disabled
					/>

					<p>
						임시 비밀번호가 발급되었습니다.
						<br />
						로그인 후 마이페이지에서 비밀번호를 변경해 주세요.
					</p>
				</S.InputBox>
			</div>

			<Button size={'default'} variant={'default'}>
				로그인
			</Button>
		</S.FormBox>
	);
}

export default TempPwd;
