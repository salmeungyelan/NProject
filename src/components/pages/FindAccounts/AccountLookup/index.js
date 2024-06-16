import * as S from './index.styles';

import Notice from 'components/@common/Notice';
import Button from 'components/@common/Button';
import InputBox from 'components/@common/InputBox';

function AccountLookup(props) {
	const { password } = props;

	console.log(password);

	const input = password ? '이메일 또는 아이디' : '업체명';
	const inputPlaceHolder = password ? '이메일 또는 아이디를' : '업체명을';

	return (
		<S.FormBox action="">
			<InputBox
				title={input}
				placeholder={`${inputPlaceHolder} 입력해 주세요.`}
				register
				message
			/>

			<InputBox
				title="전화번호"
				placeholder="전화번호를 입력해 주세요."
				register
				message
			/>

			<InputBox
				title="사업자 등록 번호"
				placeholder="업체의 사업자 등록 번호를 입력해 주세요."
				register
				message
			/>

			<S.ButtonBox>
				<Notice />

				<Button variant={'default'} size={'default'} disabled>
					{password ? '임시 비밀번호 발급' : '아이디 찾기'}
				</Button>
			</S.ButtonBox>
		</S.FormBox>
	);
}

export default AccountLookup;
