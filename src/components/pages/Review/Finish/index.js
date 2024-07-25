import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import useModal from 'hooks/useModal';
import useSlide from 'hooks/useSlide';

import * as S from './index.styles';

import Button from 'components/@common/Button';
import RatingSubModal from '../RatingSubModal';

function Finish({ result }) {
	const { modalState, openModal, closeModal } = useModal();

	const navigate = useNavigate();

	const { resultLinks, adminFiles, comment, star, isRatingable } = result;

	// 별점 계산
	const rate = [];

	for (let i = 0; i < 5; i++) {
		if (star > i) rate.push(<img src="/assets/icons/star-color.svg" />);
		else rate.push(<img src="/assets/icons/star.svg" />);
	}

	const mediaRef = useRef([]);
	const containerRef = useRef(null);

	const { handlePrevClick, handleNextClick, slide, visibleItemsCount } =
		useSlide(mediaRef, containerRef, adminFiles);

	return (
		<S.Body>
			{modalState && (
				<RatingSubModal onClose={() => closeModal(navigate(0))} star={star} />
			)}

			<S.Box>
				<S.Title>링크</S.Title>
				{resultLinks?.map(link => (
					<S.ReadOnly key={link.id}>{link.url}</S.ReadOnly>
				))}
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
							<S.ImgTitle>
								<p>{file.name}</p>
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
							<Button
								size="height"
								variant="default"
								onClick={() => openModal()}
							>
								별점 등록하기
							</Button>
						)}
					</div>
				</div>
			</S.RatingBox>
		</S.Body>
	);
}

export default Finish;
