import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useApi from 'hooks/useApi';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import PreviousPost from 'components/@common/PreviousPost';

function NoticeDetail() {
	const params = useParams();
	const id = params._id;

	const [noticeDetail, setNoticeDetail] = useState({});
	const [prevPost, setPrevPost] = useState({
		prev: {},
		next: {},
	});

	const { result, trigger } = useApi({
		path: `/client/notices/${id}`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setNoticeDetail(result.data.notice);
			setPrevPost({
				prev: result.data.previousNotice,
				next: result.data.nextNotice,
			});
		}
	}, [result.data]);

	const { noticeContentTypeLabel, title, author, createDate, content } =
		noticeDetail;

	return (
		<S.Body>
			<Title title="NOTICE">넷플레이스 공지사항 안내</Title>

			{noticeDetail && (
				<S.Content>
					<S.TitleBox>
						{noticeContentTypeLabel === '중요' && (
							<>
								<img src="/assets/icons/pin.svg" />
								<S.Important>중요</S.Important>
							</>
						)}
						<S.Title>{title}</S.Title>
					</S.TitleBox>

					<S.Info>
						<span>{author}</span>
						<p>{createDate}</p>
					</S.Info>

					<S.Description>{content}</S.Description>
				</S.Content>
			)}

			<PreviousPost
				trigger={trigger}
				prev={prevPost.prev}
				next={prevPost.next}
			/>
		</S.Body>
	);
}

export default NoticeDetail;
