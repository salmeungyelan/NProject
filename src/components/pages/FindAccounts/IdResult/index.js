import * as S from './index.styles';

import InputBox from 'components/@common/InputBox';
import Button from 'components/@common/Button';

function IdResult() {
	return (
		<S.Body>
			<div>
				<InputBox
					title="이메일"
					value="salmeungyelan@gmail.com"
					disabled
					register
				/>

				<InputBox title="아이디" value="삶을 걔랑" disabled register />
			</div>

			<Button size={'default'} variant={'default'}>
				로그인
			</Button>
		</S.Body>
	);
}

export default IdResult;
