import { useEffect, useState } from 'react';

import useApi from 'hooks/useApi';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import List from 'components/pages/Home/List';
import Line from 'components/@common/Line';
import More from 'components/pages/Home/More';

function Home() {
	const [reviewData, setReviewData] = useState([]);
	const [guideData, setGuideData] = useState([]);
	const [noticeData, setNoticeData] = useState([]);

	const { result } = useApi({
		path: '/client/dashboard',
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setReviewData(result.data.reviewData);
			setGuideData(result.data.guideData);
			setNoticeData(result.data.noticeData);
		}
	}, [result.data]);

	return (
		<S.Body>
			<Title title="MAIN" />

			<List reviewData={reviewData} />

			<Line size="width" variant="lightGray" />

			<S.Mores>
				<More data={noticeData}>공지사항</More>
				<More data={guideData}>이용안내</More>
			</S.Mores>
		</S.Body>
	);
}

export default Home;
