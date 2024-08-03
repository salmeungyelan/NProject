import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useApi from 'hooks/useApi';
import LINK from 'constants/link';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import Progress from 'components/@common/Progress';
import Keyword from 'components/pages/Review/Keyword';
import MediaList from 'components/pages/Review/MediaList';
import Finish from 'components/pages/Review/Finish';
import PreviousPost from 'components/@common/PreviousPost';
import Button from 'components/@common/Button';

function ReviewPost() {
	const params = useParams();
	const _id = params._id;

	const navigate = useNavigate();

	const [review, setReview] = useState({});

	const { result, trigger } = useApi({
		path: `/client/reviews/${_id}`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setReview(result.data);
		}
	}, [result.data, review.star]);

	const handleClickModify = () => {
		navigate(LINK.REVIEW_APPLY + `/${_id}`);
	};

	const handleClickBack = () => {
		navigate(-1);
	};

	const {
		status,
		statusLabel,
		typeLabel,
		title,
		username,
		email,
		completeDate,
		requirement,
		mainKeyword,
		subKeywords,
		hashtags,
		clientFiles,
		resultLinks,
		adminFiles,
		comment,
		star,
		isRatingable,
		nextReview,
		previousReview,
	} = review;

	const completed = statusLabel === '완료';
	const resultInfo = {
		resultLinks,
		adminFiles,
		comment,
		star,
		isRatingable,
	};

	return (
		<>
			{review && (
				<S.Body>
					<Title title="REVIEW">
						자사 영업일 기준, 하루 한 번 신청 가능합니다.
					</Title>

					<S.Content>
						<S.Info>
							<S.InfoMain>
								<Progress variant={status}>{statusLabel}</Progress>
								<S.Category>{typeLabel}</S.Category>
								<S.Title>{title}</S.Title>
							</S.InfoMain>

							<S.InfoSub>
								<div>
									{username}ㅣ{email}
								</div>
								<div>{completeDate}</div>
							</S.InfoSub>
						</S.Info>

						<S.Description $isList={clientFiles?.length}>
							<S.DesTitle>요청 사항 및 내용</S.DesTitle>

							<pre>{requirement}</pre>

							{!['대기', '임시저장'].includes(statusLabel) && (
								<Keyword
									main={mainKeyword}
									sub={subKeywords}
									hashtag={hashtags}
								/>
							)}
						</S.Description>

						{clientFiles?.length ? (
							<MediaList clientFiles={clientFiles} />
						) : (
							<></>
						)}

						{completed && <Finish result={resultInfo} />}
					</S.Content>

					<PreviousPost
						next={nextReview}
						prev={previousReview}
						trigger={trigger}
					/>

					<S.ButtonBox>
						<div>
							<Button size="height" variant="white" onClick={handleClickBack}>
								뒤로 가기
							</Button>
						</div>
						{statusLabel === '임시저장' && (
							<div>
								<Button
									size="height"
									variant="default"
									onClick={handleClickModify}
								>
									임시 저장 수정
								</Button>
							</div>
						)}
					</S.ButtonBox>
				</S.Body>
			)}
		</>
	);
}

export default ReviewPost;
