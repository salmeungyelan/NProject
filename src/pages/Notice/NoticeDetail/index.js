import * as S from './index.styles';

import Title from 'components/@common/Title';
import PreviousPost from 'components/@common/PreviousPost';

function NoticeDetail() {
	return (
		<S.Body>
			<Title title={'NOTICE'}>넷플레이스 공지사항 안내</Title>

			<S.Content>
				<S.TitleBox>
					<img src="/assets/icons/pin.svg" />
					<S.Important>중요</S.Important>
					<S.Title>이제 그만 STOP</S.Title>
				</S.TitleBox>

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

			<PreviousPost />
		</S.Body>
	);
}

export default NoticeDetail;
