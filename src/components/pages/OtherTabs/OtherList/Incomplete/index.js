import { useState } from 'react';

import useModal from 'hooks/useModal';

import * as S from './index.styles';

import Button from 'components/@common/Button';
import ApplicationModal from '../../ApplicationModal';
import CancelModal from '../CancelModal';

function Incomplete(props) {
	const { id, title, statusLabel, listTrigger } = props;
	const { modalState, openModal, closeModal } = useModal();

	const [modify, setModify] = useState(false);

	const handleModify = () => {
		openModal();
		setModify(true);
	};

	// 임시 저장 여부 확인
	const isTempSave = statusLabel === '임시저장';

	return (
		<>
			{/* 수정하기 모달 */}
			{modalState && modify && (
				<ApplicationModal
					title={title}
					tempSave={id}
					onClose={() => closeModal()}
					listTrigger={listTrigger}
				/>
			)}

			{/* 취소 모달 */}
			{modalState && !modify && (
				<CancelModal
					id={id}
					onClose={closeModal}
					remove={statusLabel === '취소'}
					listTrigger={listTrigger}
				/>
			)}

			<S.Body $isTempSave={isTempSave}>
				<div>
					<S.Ex>
						{isTempSave ? (
							<>
								신청이 완료되지 않았습니다.
								<br />
								신청폼을 다 작성한 후, 다시 신청해 주세요.
							</>
						) : (
							<>
								신청이 취소되었습니다.
								<br />
								이용에 관심을 가져주셔서 감사합니다.
							</>
						)}
					</S.Ex>
				</div>

				<S.ButtonBox>
					{isTempSave ? (
						<>
							<Button size="height" variant="default" onClick={handleModify}>
								임시저장 수정
							</Button>
							<Button size="height" variant="white" onClick={() => openModal()}>
								신청 취소
							</Button>
						</>
					) : (
						<Button size="height" variant="default" onClick={() => openModal()}>
							삭제하기
						</Button>
					)}
				</S.ButtonBox>
			</S.Body>
		</>
	);
}

export default Incomplete;
