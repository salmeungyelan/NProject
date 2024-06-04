import useModal from 'hooks/useModal';

import * as S from './index.styles';

import Input from 'components/@common/Input';
import Button from 'components/@common/Button';
import Modal from 'components/@common/Modal';

function NewPw() {
	const { openModal } = useModal();
	const handleOpenModal = () => {
		openModal({
			img: '/assets/icons/modal-check.svg',
			title: '비밀번호 변경',
			content: '비밀번호 변경이 완료되었습니다.',
			callback: () => console.log('modal closed'),
		});
	};

	return (
		<S.FormBox>
			<div>
				<S.InputBox>
					<S.H1>비밀번호 입력</S.H1>
					<Input
						size={'default'}
						variant={'default'}
						type="password"
						placeholder="비밀번호를 입력해 주세요."
						required
					/>
					<S.EX>
						<img src="/assets/icons/check.svg" />
						<span>8자 이상 32자 이하 입력 (공백 제외)</span>
					</S.EX>
					<p></p>
				</S.InputBox>

				<S.InputBox>
					<S.H1>비밀번호 확인</S.H1>
					<Input
						size={'default'}
						variant={'default'}
						type="password"
						placeholder="비밀번호를 한 번 더 입력해 주세요."
						required
					/>
					<p></p>
				</S.InputBox>
			</div>

			<Modal />

			<Button
				size={'default'}
				variant={'default'}
				shape={'default'}
				onClick={handleOpenModal}
			>
				변경
			</Button>
		</S.FormBox>
	);
}

export default NewPw;
