import Button from 'components/@common/Button';
import * as S from './index.styles';

const img = [1, 2, 3, 4, 5];

function Finish() {
	return (
		<S.Body>
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
						<Button size={'height'} variant={'default'}>
							별점 등록하기
						</Button>
					</div>
				</div>
			</S.RatingBox>
		</S.Body>
	);
}

export default Finish;
