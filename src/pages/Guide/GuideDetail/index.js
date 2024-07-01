import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useApi from 'hooks/useApi';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import PreviousPost from 'components/@common/PreviousPost';
import Loading from 'components/@common/Loading/Loading';

function GuideDetail() {
	const params = useParams();
	const id = params._id;

	const [detailData, setDetailData] = useState({});

	const { result } = useApi({
		path: `/client/guides/${id}`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setDetailData(result.data.guide);
		}
	}, [result.data, detailData]);

	const { author, title, content } = detailData;

	return (
		<>
			{detailData && (
				<S.Body>
					<Title title={'GUIDE'}>넷플레이스 이용안내</Title>

					<S.Content>
						<S.Title>{title}</S.Title>

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

export default GuideDetail;
