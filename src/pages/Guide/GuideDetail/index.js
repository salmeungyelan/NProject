import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useApi from 'hooks/useApi';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import PreviousPost from 'components/@common/PreviousPost';

function GuideDetail() {
	const params = useParams();
	const id = params._id;

	const [detailData, setDetailData] = useState({});
	const [prevPost, setPrevPost] = useState({
		prev: {},
		next: {},
	});

	const { result, trigger } = useApi({
		path: `/client/guides/${id}`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setDetailData(result.data.guide);
			setPrevPost({
				prev: result.data.previousGuide,
				next: result.data.nextGuide,
			});
		}

		console.log(result.data);
	}, [result.data, detailData]);

	const { author, title, content } = detailData;

	return (
		<>
			{detailData && (
				<S.Body>
					<Title title="GUIDE">넷플레이스 이용안내</Title>

					<S.Content>
						<S.Title>{title}</S.Title>

						<S.Info>
							<span>{author}</span>
							<p>2024년 04월 24일</p>
						</S.Info>

						<S.Description>{content}</S.Description>
					</S.Content>

					<PreviousPost
						trigger={trigger}
						prev={prevPost.prev}
						next={prevPost.next}
					/>
				</S.Body>
			)}
		</>
	);
}

export default GuideDetail;
