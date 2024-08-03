import { useRef, useState } from 'react';

import useModal from 'hooks/useModal';
import useSlide from 'hooks/useSlide';

import * as S from './index.styles';

import Button from 'components/@common/Button';
import RatingSubModal from '../RatingSubModal';
import MediaModal from 'components/@common/MediaModal';

function Finish({ result }) {
	const { modalState, openModal, closeModal } = useModal();

	const { resultLinks, adminFiles, comment, star, isRatingable } = result;

	// 별점 계산
	const rate = [];

	for (let i = 0; i < 5; i++) {
		if (star > i) rate.push(<img src="/assets/icons/star-color.svg" key={i} />);
		else rate.push(<img src="/assets/icons/star.svg" key={i} />);
	}

	const mediaRef = useRef([]);
	const containerRef = useRef(null);

	const { handlePrevClick, handleNextClick, slide, visibleItemsCount } =
		useSlide(mediaRef, containerRef, adminFiles);

	const [file, setFile] = useState({ url: '', type: '' });
	const [isMediaModal, setIsMediaModal] = useState(false);

	const handleOpenModal = (url, type) => {
		setIsMediaModal(true);
		setFile({ url, type });
		openModal();
	};

	return (
		<S.Body>
			{modalState && !isMediaModal && (
				<RatingSubModal onClose={closeModal} star={star} />
			)}

			{modalState && isMediaModal && (
				<MediaModal
					src={file.url}
					type={file.type}
					onClose={() => closeModal(setIsMediaModal(false))}
				/>
			)}

			<S.Box>
				<S.Title>링크</S.Title>
				{resultLinks && <S.ReadOnly>{resultLinks.url}</S.ReadOnly>}
			</S.Box>

			<S.Box>
				{slide > 0 && slide !== adminFiles?.length - 1 && (
					<S.LeftArrowImg onClick={handlePrevClick} />
				)}

				<S.Title>첨부 파일</S.Title>
				<S.ReadImg ref={containerRef}>
					{adminFiles?.map((file, index) => (
						<S.Img key={file.id} ref={el => (mediaRef.current[index] = el)}>
							<img src={file.url} />
							<S.ImgTitle
								onClick={() => handleOpenModal(file.url, file.mimetype)}
							>
								<p>{file.originalname}</p>
								<img src="/assets/icons/search.svg" />
							</S.ImgTitle>
						</S.Img>
					))}
				</S.ReadImg>

				{slide + visibleItemsCount < adminFiles?.length && (
					<S.RightArrowImg onClick={handleNextClick} />
				)}
			</S.Box>

			<S.Box>
				<S.Title>안내</S.Title>
				<S.ReadOnly>{comment}</S.ReadOnly>
			</S.Box>

			<S.RatingBox>
				<S.Title>별점</S.Title>

				<div>
					<S.Rate>
						<div>{rate}</div>
						{star || '등록된 별점 없음'}
					</S.Rate>

					<div>
						{isRatingable && (
							<Button size="height" variant="default" onClick={openModal}>
								별점 {star ? '수정' : '등록'}하기
							</Button>
						)}
					</div>
				</div>

				<S.RateNotice>
					별점 등록은 리뷰 완료 이후 3일 이내로 등록해 주세요.
				</S.RateNotice>
			</S.RatingBox>
		</S.Body>
	);
}

export default Finish;
