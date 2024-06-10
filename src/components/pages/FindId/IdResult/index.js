import * as S from './index.styles';

import Button from 'components/@common/Button';
import Input from 'components/@common/Input';

function IdResult() {
	return (
		<S.Body>
			<div>
				<S.InputBox>
					<S.Title>이메일</S.Title>
					<Input
						size={'default'}
						variant={'default'}
						value="salmeungyelan@gmail.com"
						disabled
					/>
				</S.InputBox>

				<S.InputBox>
					<S.Title>아이디</S.Title>
					<Input
						size={'default'}
						variant={'default'}
						value="삶을 걔랑"
						disabled
					/>
				</S.InputBox>
			</div>

			<Button size={'default'} variant={'default'}>
				로그인
			</Button>
		</S.Body>
	);
}

export default IdResult;
