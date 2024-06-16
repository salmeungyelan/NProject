import { useState } from 'react';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import Input from 'components/@common/Input';
import Textarea from 'components/@common/Textarea';
import Button from 'components/@common/Button';

const hashTag = [
	'#요가',
	'#필라테스',
	'#황올필테',
	'#황금올리브필라테스',
	'#김지황',
	'#엄재현',
	'#조아연',
	'#최은채',
	'#끝내자',
	'#해시태그20개',
	'#프로젝트',
	'#6월에',
	'#끝나겠지',
	'#끝나야댐',
	'#20개채우기',
	'#프로젝트',
	'#이미지15개',
	'#너무많다',
	'#다햇는데',
	'#20개안올리면쥬기겟다',
];

const keyWord = ['필라테스', '요가', '기구 필라테스', '필테'];
const position = ['블로그', '방문자', '인스타그램'];
const img = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function ReviewApply() {
	const [fileName, setFileName] = useState('');

	const handleFileChange = event => {
		const file = event.target.files[0];
		if (file) {
			setFileName(file.name);
		}
	};

	const handleButtonClick = () => {
		document.getElementById('hiddenFileInput').click();
	};

	return (
		<S.Body>
			<Title title={'REVIEW'}>
				자사 영업일 기준, 하루 한 번 신청 가능합니다.
			</Title>

			<S.Content>
				<S.Box>
					<S.Title>리뷰 카테고리</S.Title>
					<S.CategoryBox>
						{position.map((filter, idx) => (
							<S.Category key={idx}>{filter}</S.Category>
						))}
					</S.CategoryBox>
					<p></p>
				</S.Box>

				<S.Box>
					<S.Title>리뷰 제목</S.Title>
					<Input
						variant={'default'}
						size={'height'}
						placeholder={'제목을 입력해 주세요.'}
					/>
					<p></p>
				</S.Box>

				<S.Box>
					<S.Title>요청사항 및 내용</S.Title>
					<Textarea
						variant={'default'}
						size={'default'}
						placeholder={'요청사항 및 내용을 입력해 주세요.'}
					/>
					<p></p>
				</S.Box>

				<S.Box>
					<S.Title>메인 키워드</S.Title>
					<S.WordBox>
						<S.Word>황금올리브유필라테스</S.Word>
					</S.WordBox>
					<p />
				</S.Box>

				<S.Box>
					<S.Title>서브 키워드</S.Title>
					<S.WordBox>
						{keyWord.map((tag, idx) => (
							<S.Word key={idx}>{tag}</S.Word>
						))}
					</S.WordBox>
					<p />
				</S.Box>

				<S.Box>
					<S.Title>해시태그</S.Title>
					<S.WordBox>
						{hashTag.map((tag, idx) => (
							<S.Word key={idx}>{tag}</S.Word>
						))}
					</S.WordBox>
					<p />
				</S.Box>

				<S.Box>
					<S.Title>스마트 플레이스 링크</S.Title>
					<Input
						variant={'default'}
						size={'height'}
						value={'https://hawngeumOliveYou.naver.blog.com'}
						disabled
					/>
					<p />
				</S.Box>

				{/* 업로드 파일 */}
				<S.Box>
					<S.Title>업로드 파일</S.Title>

					<S.FileBox>
						<span>
							파일은 최대 50MB까지 업로드 가능합니다.
							<br />
							영상은 최대 1개, 이미지는 최대 15장까지 업로드 가능합니다.
						</span>

						<p>썸네일을 지정해 주세요.</p>

						<S.FileImageBox>
							<S.FileContainer>
								<S.CustomButton onClick={handleButtonClick}>
									<img src="/assets/icons/camera.svg" />
								</S.CustomButton>
								<S.HiddenFileInput
									id="hiddenFileInput"
									type="file"
									onChange={handleFileChange}
								/>
								<S.ImgTitle onClick={handleButtonClick}>
									<p>파일 선택</p>
								</S.ImgTitle>
							</S.FileContainer>

							<S.Img>
								<S.Thumbnail>
									<img src="/assets/icons/thumbnail-check.svg" />
									<span>썸네일</span>
								</S.Thumbnail>
								<img src="/assets/images/example.png" />
								<S.ImgTitle>
									<p>{fileName}</p>
									<img src="/assets/icons/search.svg" />
								</S.ImgTitle>
							</S.Img>

							{img.map((el, idx) => (
								<S.Img key={idx}>
									<img src="/assets/images/example.png" />
									<S.ImgTitle>
										<p>image_{el}.jpg</p>
										<img src="/assets/icons/search.svg" />
									</S.ImgTitle>
								</S.Img>
							))}
						</S.FileImageBox>
					</S.FileBox>
				</S.Box>
			</S.Content>

			<S.ButtonBox>
				<S.Check>
					키워드, 해시태그, 스마트 플레이스 링크 수정은 관리자에게 문의해
					주세요.
				</S.Check>

				<div>
					<div>
						<Button variant={'white'} size={'height'}>
							취소
						</Button>
						<Button variant={'white'} size={'height'}>
							임시 저장
						</Button>
					</div>

					<Button variant={'default'} size={'height'}>
						리뷰 등록 완료
					</Button>
				</div>
			</S.ButtonBox>
		</S.Body>
	);
}

export default ReviewApply;
