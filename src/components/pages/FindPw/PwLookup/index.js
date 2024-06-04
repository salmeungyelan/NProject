import * as S from './index.styles';

import Input from 'components/@common/Input';
import Button from 'components/@common/Button';
import Notice from 'components/@common/Notice';
import MESSAGE from 'constants/message';

function PwLookup() {
	return (
		<S.FormBox action="">
			<S.InputBox>
				<S.Title>이메일 또는 아이디</S.Title>
				<div>
					<Input
						size={'default'}
						variant={'default'}
						type="text"
						autoComplete="off"
						placeholder="아이디 또는 아이디를 입력해 주세요."
						required
					/>
					<p>{MESSAGE.JOIN.COMPANY}</p>
				</div>
			</S.InputBox>

			<S.InputBox>
				<S.Title>전화번호</S.Title>
				<div>
					<Input
						size={'default'}
						variant={'default'}
						type="text"
						autoComplete="off"
						placeholder="전화번호를 입력해 주세요."
						required
					/>
					<p>{MESSAGE.JOIN.COMPANY}</p>
				</div>
			</S.InputBox>

			<S.InputBox>
				<S.Title>사업자 등록 번호</S.Title>
				<div>
					<Input
						size={'default'}
						variant={'default'}
						type="text"
						autoComplete="off"
						placeholder="업체의 사업자 등록 번호를 입력해 주세요."
						required
					/>
					<p>{MESSAGE.JOIN.COMPANY}</p>
				</div>
			</S.InputBox>

			<S.ButtonBox>
				<Notice />

				<Button
					shape={'default'}
					variant={'default'}
					size={'default'}
					type="submit"
				>
					비밀번호 찾기
				</Button>
			</S.ButtonBox>
		</S.FormBox>
	);
}

export default PwLookup;
