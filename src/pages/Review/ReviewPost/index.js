import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useApi from 'hooks/useApi';
import LINK from 'constants/link';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import Progress from 'components/@common/Progress';
import PreviousPost from 'components/@common/PreviousPost';
import Button from 'components/@common/Button';
import Keyword from 'components/pages/Review/Keyword';
import MediaList from 'components/pages/Review/MediaList';
import Finish from 'components/pages/Review/Finish';

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

		console.log(result.data);
	}, [result.data, review.star]);

	const handleClickApply = () => {
		navigate(LINK.REVIEW_APPLY + `/${_id}`);
	};

	const handleClickBackBtn = () => {
		navigate(-1);
	};

	const {
		status,
		statusLabel,
		typeLabel,
		title,
		companyName,
		email,
		submittedAt,
		requirement,
		hashtags,
		mainKeyword,
		subKeywords,
		clientFiles,
		nextReview,
		previousReview,
		resultLinks,
		adminFiles,
		comment,
		star,
		isRatingable,
	} = review;

	const fin = statusLabel === '완료';
	const results = { resultLinks, adminFiles, comment, star, isRatingable };

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
									{companyName}ㅣ{email}
								</div>
								<div>{submittedAt}</div>
							</S.InfoSub>
						</S.Info>

						<S.Description>
							<S.DesTitle>요청 사항 및 내용</S.DesTitle>

							<pre>{requirement}</pre>

							<Keyword
								main={mainKeyword}
								sub={subKeywords}
								hashtag={hashtags}
							/>
						</S.Description>

						<MediaList clientFiles={clientFiles} />

						{fin && <Finish result={results} />}
					</S.Content>

					<PreviousPost
						next={nextReview}
						prev={previousReview}
						trigger={trigger}
					/>

					<S.ButtonBox>
						<div>
							<Button
								variant="white"
								size="height"
								onClick={() => handleClickBackBtn()}
							>
								뒤로 가기
							</Button>
						</div>
						{statusLabel === '임시저장' && (
							<div>
								<Button
									variant="default"
									size="height"
									onClick={() => handleClickApply()}
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
