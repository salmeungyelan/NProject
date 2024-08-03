import { useState } from 'react';

import useModal from 'hooks/useModal';

import * as S from './index.styles';

import CompletionInfo from './CompletionInfo';
import Button from 'components/@common/Button';
import ApplicationModal from '../../ApplicationModal';
import CancelModal from '../CancelModal';

const steps = [
	{ id: 'first', label: '신청 완료' },
	{ id: 'second', label: '접수 완료' },
	{ id: 'third', label: '결제 완료' },
	{ id: 'fourth', label: '제작 중' },
	{ id: 'fifth', label: '완료' },
];

function ProgressStatus(props) {
	const { id, title, history, progress } = props;

	const { modalState, openModal, closeModal } = useModal();

	const [isCancel, setIsCancel] = useState(false);

	const handleClickCancel = () => {
		openModal();
		setIsCancel(true);
	};

	return (
		<>
			{/* 신청한 내역 확인 */}
			{modalState && !isCancel && (
				<ApplicationModal
					title={title}
					tempSave={id}
					onClose={closeModal}
					disabled={true}
					progress={progress}
				/>
			)}

			{/* 대기 상태에서 취소할 경우 */}
			{modalState && isCancel && <CancelModal id={id} onClose={closeModal} />}

			<S.Body>
				<S.StatusBox>
					<S.Status>진행 상태</S.Status>
					<S.ImgBox>
						{steps.map(step => (
							<S.ImgStatus key={step.id}>
								<img
									src={`/assets/icons/${
										history[history.length - 1].detailStatusLabel === step.label
											? `${step.id}-color`
											: step.id
									}.svg`}
								/>
								<span>{step.label}</span>
							</S.ImgStatus>
						))}
						<S.ImgLine />
					</S.ImgBox>

					<S.TableBox>
						<thead>
							<tr>
								<S.Th>일시</S.Th>
								<S.Th>진행 상태</S.Th>
							</tr>
						</thead>
						{history &&
							history.map(data => (
								<tbody key={data.id}>
									<tr>
										<S.Td>{data.createdAt}</S.Td>
										<S.Td>
											{data.detailStatusLabel === '제작 중'
												? '제작 중입니다.'
												: `${data.detailStatusLabel}되었습니다.`}
										</S.Td>
									</tr>
								</tbody>
							))}
					</S.TableBox>

					{progress === '완료' && <CompletionInfo id={id} />}
				</S.StatusBox>

				<S.ButtonBox>
					<Button size="height" variant="default" onClick={openModal}>
						신청 내역 확인
					</Button>
					{progress === '신규' && (
						<Button size="height" variant="white" onClick={handleClickCancel}>
							신청 취소
						</Button>
					)}
				</S.ButtonBox>
			</S.Body>
		</>
	);
}

export default ProgressStatus;
