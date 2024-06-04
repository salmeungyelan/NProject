import * as S from './index.styles';

import Input from 'components/@common/Input';
import Notice from 'components/@common/Notice';
import Button from 'components/@common/Button';
import MESSAGE from 'constants/message';

function IdLookup() {
	return (
		<S.FormBox action="">
			<S.InputBox>
				<S.Title>업체명</S.Title>
				<div>
					<Input
						size={'default'}
						variant={'default'}
						type="text"
						placeholder="업체명을 입력해 주세요."
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
						placeholder="전화번호를 입력해 주세요."
						required
					/>
					<p>{MESSAGE.JOIN.NUMBER}</p>
				</div>
			</S.InputBox>

			<S.InputBox>
				<S.Title>사업자 등록 번호</S.Title>
				<div>
					<Input
						size={'default'}
						variant={'default'}
						type="text"
						placeholder="업체의 사업자 등록 번호를 입력해 주세요."
						required
					/>
					<p>{MESSAGE.JOIN.CO_NUMBER}</p>
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
					아이디 찾기
				</Button>
			</S.ButtonBox>
		</S.FormBox>
	);
}

export default IdLookup;