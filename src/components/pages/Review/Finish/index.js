import useModal from 'hooks/useModal';

import * as S from './index.styles';

import RatingSubModal from '../RatingSubModal';

import Button from 'components/@common/Button';
import { useNavigate } from 'react-router-dom';

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

	return (
		<S.Body>
			{modalState && (
				<RatingSubModal onClose={() => closeModal(navigate(0))} star={star} />
			)}

			<S.Box>
				<S.Title>링크</S.Title>
				{resultLinks &&
					resultLinks.map(link => (
						<S.ReadOnly key={link.id}>{link.url}</S.ReadOnly>
					))}
			</S.Box>

			<S.Box>
				<S.Title>첨부 파일</S.Title>
				<S.ReadImg>
					{adminFiles.length > 0 &&
						adminFiles.map(file => (
							<S.Img key={file.id}>
								<img src={file.url} />
								<S.ImgTitle>
									<p>{file.name}</p>
									<img src="/assets/icons/search.svg" />
								</S.ImgTitle>
							</S.Img>
						))}
				</S.ReadImg>
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
