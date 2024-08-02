import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import usePathname from 'hooks/usePathname';
import useApi from 'hooks/useApi';
import useModal from 'hooks/useModal';

import * as S from './index.styles';

import Button from 'components/@common/Button';
import Modal from 'components/@common/Modal';

const pathTitle = [
	{ path: 'visit-experience', title: '체험단' },
	{ path: 'viewtab-instagram', title: '뷰탭 & 인스타' },
	{ path: 'website-outsourcing', title: '홈페이지 제작' },
];

function CancelModal(props) {
	const { id, onClose, remove, listTrigger } = props;

	const { path } = usePathname();
	const { modalState, openModal } = useModal();

	const modalTitle = pathTitle.find(v => v.path === path);
	const { title } = modalTitle;

	const [isComplete, setIsComplete] = useState(false);
	const navigate = useNavigate();

	const [postData, setPostData] = useState();
	const [modalContent, setModalContent] = useState({
		img: 'modal-excl.svg',
		title: `${title} 신청 ${remove ? '삭제' : '취소'}`,
		content: `${title} 신청 ${
			remove ? '삭제' : '취소'
		}가 실패했습니다. 다시 시도해 주세요.`,
	});

	const { result, trigger } = useApi({
		path: `/client/${path}s/${id}`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) setPostData(result.data);
	}, [result.data]);

	// 취소
	const handleClickCancel = async () => {
		const updatedData = {
			...postData,
			status: `${path.toUpperCase().replace(/-/g, '_')}_STATUS_05`,
			detailStatus: `${path.toUpperCase().replace(/-/g, '_')}_DETAIL_STATUS_06`,
			statusLabel: '취소',
		};

		const formData = new FormData();
		for (const [key, value] of Object.entries(updatedData)) {
			formData.append(
				key,
				value instanceof Object ? JSON.stringify(value) : value,
			);
		}

		// 언젠가 패치가 생기면 쓸...
		// const updatedStatus = {
		// 	status: `${path.toUpperCase().replace(/-/g, '_')}_STATUS_05`,
		// 	statusLabel: '취소',
		// };

		const req = await trigger({
			path: `/client/${path}s`,
			method: 'post',
			data: formData,
		});

		const { error } = req || {};

		if (!error) {
			setModalContent(prev => ({
				...prev,
				img: 'modal-check.svg',
				content: `${title} 취소가 완료되었습니다.`,
			}));
		}

		openModal();
	};

	// 삭제
	const handleClickDelete = async () => {
		const req = await trigger({
			path: `/client/${path}s/${id}`,
			method: 'delete',
		});

		const { error } = req || {};

		if (!error) {
			setModalContent(prev => ({
				...prev,
				img: 'modal-check.svg',
				content: `${title} 삭제가 완료되었습니다.`,
			}));
		}

		openModal();
	};

	return (
		<>
			{modalState && (
				<Modal
					img={modalContent.img}
					title={modalContent.title}
					content={modalContent.content}
					onClose={() => onClose(navigate(0))}
				/>
			)}

			<S.Background>
				<S.Container>
					<S.Header>
						<img src="/assets/icons/modal-excl.svg" />
						<S.Title>
							{title} 신청 {remove ? '삭제' : '취소'}
						</S.Title>

						<S.Body>
							{title} 신청을 {remove ? '삭제' : '취소'}하시겠습니까?
						</S.Body>
					</S.Header>

					<S.ButtonBox>
						<Button size="default" variant="white" onClick={onClose}>
							취소
						</Button>
						<Button
							size="default"
							variant="default"
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
