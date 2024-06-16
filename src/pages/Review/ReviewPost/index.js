import * as S from './index.styles';

import Title from 'components/@common/Title';
import PreviousPost from 'components/@common/PreviousPost';
import Progress from 'components/@common/Progress';
import Keyword from 'components/pages/Review/Keyword';
import ImgList from 'components/pages/Review/ImgList';
import Finish from 'components/pages/Review/Finish';

function ReviewPost() {
	const fin = '완료';

	return (
		<S.Body>
			<Title title={'REVIEW'}>
				자사 영업일 기준, 하루 한 번 신청 가능합니다.
			</Title>

			<S.Content>
				<S.Info>
					<S.InfoMain>
						<Progress variant={'fin'}>완료</Progress>
						<S.Category>방문자</S.Category>
						<S.Title>리뷰 제목</S.Title>
					</S.InfoMain>

					<S.InfoSub>
						<div>황금올리브유필라테스ㅣhwangeumOliveYou@google.com</div>
						<div>2024년 03월 17일</div>
					</S.InfoSub>
				</S.Info>

				<S.Description>
					<S.DesTitle>요청 사항 및 내용</S.DesTitle>

					<pre>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
						nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
						volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
						ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
						consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
						velit esse molestie consequat, vel illum dolore eu feugiat nulla
						facilisis at vero eros et accumsan et iusto odio dignissim qui
						blandit praesent luptatum zzril delenit augue duis dolore te feugait
						nulla facilisi.
						<br />
						<br />
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
						nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
						volutpat.
					</pre>

					<Keyword />
				</S.Description>

				<ImgList />

				{fin === '완료' ? <Finish /> : ''}
			</S.Content>

			<PreviousPost />
		</S.Body>
	);
}

export default ReviewPost;
