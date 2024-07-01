import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useApi from 'hooks/useApi';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import PreviousPost from 'components/@common/PreviousPost';
import Loading from 'components/@common/Loading/Loading';

function NoticeDetail() {
	const params = useParams();
	const id = params._id;

	const [detailData, setDetailData] = useState({});

	const { result } = useApi({
		path: `/client/notices/${id}`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setDetailData(result.data.notice);
		}
	}, [result.data, detailData]);

	const { author, title, content, noticeContentType } = detailData;

	return (
		<>
			{detailData && (
				<S.Body>
					<Title title={'NOTICE'}>넷플레이스 공지사항 안내</Title>

					<S.Content>
						<S.TitleBox>
							{noticeContentType === '중요' && (
								<>
									<img src="/assets/icons/pin.svg" />
									<S.Important>중요</S.Important>
								</>
							)}
							<S.Title>{title}</S.Title>
						</S.TitleBox>

						<S.Info>
							<span>{author}</span>
							<p>2024년 04월 24일</p>
						</S.Info>

						<S.Description>{content}</S.Description>
					</S.Content>

					<PreviousPost />
				</S.Body>
			)}
		</>
	);
}

export default NoticeDetail;
