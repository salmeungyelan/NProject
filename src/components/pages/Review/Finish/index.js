import { useState } from 'react';

import useModal from 'hooks/useModal';

import * as S from './index.styles';

import RatingSubModal from '../RatingSubModal';

import Button from 'components/@common/Button';

const img = [1, 2, 3, 4, 5];

function Finish() {
	const [stars, setStars] = useState(false);

	const { openModal } = useModal();

	const handleOpenPwdModal = () => {
		openModal({
			img: '',
			title: stars ? '별점 등록' : '별점 수정',
			content: '이용에 만족하셨다면 별점을 등록해 주세요.',
			callback: () => console.log('closed'),
		});
	};

	return (
		<S.Body>
			<RatingSubModal />

			<S.Box>
				<S.Title>링크</S.Title>
				<S.ReadOnly>https://hwangeumOliveYou.naver.blog.com</S.ReadOnly>
			</S.Box>

			<S.Box>
				<S.Title>첨부 파일</S.Title>
				<S.ReadImg>
					{img.map((el, idx) => (
						<S.Img key={idx}>
							<img src="/assets/images/example.png" />
							<S.ImgTitle>
								<p>image_{el}.jpg</p>
								<img src="/assets/icons/search.svg" />
							</S.ImgTitle>
						</S.Img>
					))}
				</S.ReadImg>
			</S.Box>

			<S.Box>
				<S.Title>안내</S.Title>
				<S.ReadOnly>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
					nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
					volutpat.
				</S.ReadOnly>
			</S.Box>

			<S.RatingBox>
				<S.Title>별점</S.Title>

				<div>
					<S.Rate>
						<div>
							<img src="/assets/icons/star.svg" />
							<img src="/assets/icons/star.svg" />
							<img src="/assets/icons/star.svg" />
							<img src="/assets/icons/star.svg" />
							<img src="/assets/icons/star.svg" />
						</div>
						등록된 별점 없음
					</S.Rate>

					{/* 별점이 0점이라면 ? '등록' : '수정' */}
					<div>
						<Button
							size={'height'}
							variant={'default'}
							onClick={handleOpenPwdModal}
						>
							별점 등록하기
						</Button>
					</div>
				</div>
			</S.RatingBox>
		</S.Body>
	);
}

export default Finish;
