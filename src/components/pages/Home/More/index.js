import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import useApi from 'hooks/useApi';
import LINK from 'constants/link';

import * as S from './index.styles';

import Line from 'components/@common/Line';

function More({ children }) {
	// 공지사항이면 true / 이용안내 false
	const title = children === '공지사항';

	const [impData, setImpData] = useState([]);

	// 공지사항 중요 2개
	const { result: impResult, isLoading: impLoading } = useApi({
		path: `/client/notices?size=2&noticeContentType=NOTICE_CONTENT_TYPE_01`,
		shouldFetch: true,
	});

	const [genData, setGenData] = useState([]);

	// 공지사항 일반 3개 & 이용안내 5개
	const {
		result: genResult,
		trigger: genTrigger,
		isLoading: genLoading,
	} = useApi({
		path: '/client/guides?size=5',
		shouldFetch: !title,
	});

	useEffect(() => {
		if (genResult.data) {
			const data = title ? genResult.data.noticeList : genResult.data.guideList;
			setGenData(data);
		}

		if (
			title &&
			impResult.data?.noticeList &&
			!impLoading &&
			!genResult.data?.noticeList &&
			!genLoading
		) {
			setImpData(impResult.data.noticeList);

			const path = `/client/notices?size=${
				5 - (impResult.data?.noticeList && impResult.data?.noticeList?.length)
			}&noticeContentType=NOTICE_CONTENT_TYPE_02`;

			genTrigger({
				path,
				applyResult: true,
			});
		}
	}, [
		genResult.data?.noticeList,
		impResult.data?.noticeList,
		impLoading,
		genLoading,
		genTrigger,
	]);

	// 더보기 주소
	const link = title ? LINK.NOTICE : LINK.GUIDE;

	return (
		<S.Body>
			<S.TitleBox>
				<S.Title>{children}</S.Title>
				<S.MoreClick>
					<Link to={link}>더보기</Link>
				</S.MoreClick>
			</S.TitleBox>

			<Line size="width" variant="lightGray" />

			<S.List $genData={genData}>
				{/* 공지사항 중요 2개 */}
				{title &&
					impData &&
					impData.map((notice, idx) => (
						<S.Important key={idx}>
							<Link to={link + `/${notice.id}`}>
								<img src="/assets/icons/pin.svg" alt="pin" />
								<S.ImportantBtn>중요</S.ImportantBtn>
								<S.ImpTitle>{notice.title}</S.ImpTitle>
							</Link>

							<S.Date>{notice.createDate}</S.Date>
						</S.Important>
					))}

				{/* 공지사항 일반 3개 & 이용안내 5개 */}
				{genData &&
					genData.map((guide, idx) => (
						<S.Commons key={idx}>
							<Link to={link + `/${guide.id}`}>
								<S.ListTitle>{guide.title}</S.ListTitle>
								<S.Date>{guide.createDate}</S.Date>
							</Link>
						</S.Commons>
					))}

				{/* 이용안내 없을 때 */}
				{!title && !genData.length && (
					<S.NoData>등록된 게시글이 없습니다.</S.NoData>
				)}

				{/* 공지사항 없을 때 */}
				{title && !genData && !impData && (
					<S.NoData>등록된 게시글이 없습니다.</S.NoData>
				)}
			</S.List>
		</S.Body>
	);
}

export default More;
