import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useModal from 'hooks/useModal';
import useApi from 'hooks/useApi';

import * as S from './index.styles';

import Button from 'components/@common/Button';
import Modal from 'components/@common/Modal';

function RatingSubModal(props) {
	const { star, onClose } = props;

	const { modalState, openModal } = useModal();

	const params = useParams();
	const id = params._id;

	const [modal, setModal] = useState({
		img: 'modal-check.svg',
		title: '알림',
		content: `별점 ${star ? '수정' : '등록'}이 완료되었습니다.`,
	});

	const [rate, setRate] = useState(star);
	const [rateData, setRateData] = useState({
		menuType: 'MENU_CHILD_03',
		postId: id,
	});

	const { trigger } = useApi({
		path: `/client/reviews/ratings/${id}`,
		shouldFetch: false,
	});

	const navigate = useNavigate();

	const handleSubmitRate = async () => {
		const updatedData = {
			...rateData,
			star: rate,
		};

		const request = await trigger({
			method: 'post',
			data: updatedData,
		});

		const { error } = request || {};

		if (error) {
			setModal({
				img: 'modal-excl.svg',
				title: '경고',
				content: `${error.response.data.message}.`,
			});
		}

		openModal();
	};

	// 클릭 핸들러
	const handleStarClick = newRate => {
		if (rate === newRate) setRate(0);
		else setRate(newRate);
	};

	// 별 이미지
	const renderStars = () => {
		const stars = [];

		for (let i = 1; i <= 5; i++) {
			const starImage =
				i <= rate ? '/assets/icons/star-color.svg' : '/assets/icons/star.svg';

			stars.push(
				<img key={i} src={starImage} onClick={() => handleStarClick(i)} />,
			);
		}

		return stars;
	};

	return (
		<S.Background>
			<S.Container>
				<S.Header>
					<S.Title>별점 {star ? '수정' : '등록'}</S.Title>
					<S.CloseBtn onClick={onClose} />
				</S.Header>

				<S.Body>
					<span>이용에 만족하셨다면 별점을 등록해 주세요.</span>

					<div>{renderStars()}</div>
				</S.Body>

				<S.ButtonBox>
					<Button size="height" variant="white" onClick={onClose}>
						취소
					</Button>
					<Button size="height" variant="default" onClick={handleSubmitRate}>
						확인
					</Button>
				</S.ButtonBox>
			</S.Container>

			{modalState && (
				<Modal
					img={modal.img}
					title={modal.title}
					content={modal.content}
					onClose={() => onClose(navigate(0))}
				/>
			)}
		</S.Background>
	);
}

export default RatingSubModal;
