import * as S from './index.styles';

import Title from 'components/@common/Title';
import Line from 'components/@common/Line';
import Button from 'components/@common/Button';

function GuideDetail() {
	return (
		<S.Body>
			<S.TopBox>
				<Title>GUIDE</Title>
				<span>넷플레이스 이용안내</span>
			</S.TopBox>

			<S.Content>
				<S.Title>이제 그만 STOP</S.Title>

				<S.Info>
					<span>넷플레이스</span>
					<p>2024년 04월 24일</p>
				</S.Info>

				<S.Description>
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
					nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
					volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
					ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
					Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
					molestie consequat, vel illum dolore eu feugiat nulla facilisis at
					vero eros et accumsan et iusto odio dignissim qui blandit praesent
					luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
					nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
					volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
					ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
				</S.Description>
			</S.Content>

			<S.NextBox>
				<S.Next>
					<span>이전</span>
					<Line size={'height2'} variant={'gray'} />
					<p>이전 게시글이 없습니다.</p>
				</S.Next>

				<Line size={'width'} variant={'lightGray'} />

				<S.Next>
					<span>다음</span>
					<Line size={'height2'} variant={'gray'} />
					<p>다음 이용 안내 제목</p>
				</S.Next>
			</S.NextBox>

			<S.ButtonBox>
				<div>
					<Button variant={'white'} size={'height'}>
						뒤로 가기
					</Button>
				</div>
			</S.ButtonBox>
		</S.Body>
	);
}

export default GuideDetail;
