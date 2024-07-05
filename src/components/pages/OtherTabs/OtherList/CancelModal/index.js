import { useEffect, useState } from 'react';

import usePathname from 'hooks/usePathname';
import useApi from 'hooks/useApi';
import useModal from 'hooks/useModal';

import * as S from './index.styles';

import Button from 'components/@common/Button';
import Modal from 'components/@common/Modal';

function CancelModal(props) {
	const { id, onClose, remove } = props;

	const { path } = usePathname();
	const { modalState, openModal } = useModal();

	const [postData, setPostData] = useState();

	const { result, trigger } = useApi({
		path: `/client/${path}s/${id}`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setPostData(result.data);
		}
	}, [result.data]);

	// 취소
	const handleClickCancel = async () => {
		const updatedData = {
			...postData,
			status: `${path.toUpperCase().replace(/-/g, '_')}_STATUS_05`,
			statusLabel: '취소',
		};

		try {
			const formData = new FormData();
			for (const [key, value] of Object.entries(updatedData)) {
				formData.append(
					key,
					value instanceof Object ? JSON.stringify(value) : value,
				);
			}

			const updatedStatus = {
				status: `${path.toUpperCase().replace(/-/g, '_')}_STATUS_05`,
				statusLabel: '취소',
			};

			await trigger({
				path: `/client/${path}s`,
				method: 'post',
				data: formData,
			});

			openModal();
		} catch (error) {}
	};

	// 삭제
	const handleClickDelete = async () => {
		try {
			await trigger({
				path: `/client/${path}s/${id}`,
				method: 'delete',
			});

			openModal();
		} catch (error) {}
	};

	return (
		<>
			{modalState && (
				<Modal
					img="modal-check.svg"
					title={`체험단 신청 ${remove ? '삭제' : '취소'}`}
					content={`체험단 ${remove ? '삭제' : '취소'}가 완료되었습니다.`}
					onClose={onClose}
				/>
			)}

			<S.Background>
				<S.Container>
					<S.Header>
						<img src="/assets/icons/modal-excl.svg" />
						<S.Title>체험단 신청 {remove ? '삭제' : '취소'}</S.Title>

						<S.Body>
							체험단 신청을 {remove ? '삭제' : '취소'}하시겠습니까?
						</S.Body>
					</S.Header>

					<S.ButtonBox>
						<Button variant="white" size="default" onClick={onClose}>
							취소
						</Button>
						<Button
							variant="default"
							size="default"
							onClick={remove ? handleClickDelete : handleClickCancel}
						>
							확인
						</Button>
					</S.ButtonBox>
				</S.Container>
			</S.Background>
		</>
	);
}

export default CancelModal;
