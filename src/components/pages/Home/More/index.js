import { Link } from 'react-router-dom';

import LINK from 'constants/link';

import * as S from './index.styles';

import Line from 'components/@common/Line';

function More(props) {
	const { children, data } = props;

	const isNotice = children === '공지사항';

	const importantList = isNotice ? data.importantNoticeList : [];
	const generalList = isNotice ? data.noticeList : data;

	const link = isNotice ? LINK.NOTICE : LINK.GUIDE;
	const detailLink = isNotice ? LINK.NOTICE_POST : LINK.GUIDE_POST;

	return (
		<S.Body>
			<S.TitleBox>
				<S.Title>{children}</S.Title>
				<S.MoreClick>
					<Link to={link}>더보기</Link>
				</S.MoreClick>
			</S.TitleBox>

			<Line size="width" variant="lightGray" />

			<S.List>
				{/* 공지사항 중요 2개 */}
				{isNotice &&
					importantList?.map((notice, idx) => (
						<S.Important key={idx}>
							<Link to={detailLink + `/${notice.id}`}>
								<img src="/assets/icons/pin.svg" alt="pin" />
								<S.ImportantBtn>중요</S.ImportantBtn>
								<S.ImpTitle>{notice.title}</S.ImpTitle>
							</Link>

							<S.Date>{notice.createDate}</S.Date>
						</S.Important>
					))}

				{/* 공지사항 일반 3개 & 이용안내 5개 */}
				{generalList?.map((item, idx) => (
					<S.Commons key={idx}>
						<Link to={`${detailLink}/${item.id}`}>
							<S.ListTitle>{item.title}</S.ListTitle>
							<S.Date>{item.createDate}</S.Date>
						</Link>
					</S.Commons>
				))}

				{!isNotice && !generalList?.length && (
					<S.NoData>등록된 이용안내가 없습니다.</S.NoData>
				)}

				{isNotice && !generalList?.length && !importantList?.length && (
					<S.NoData>등록된 공지사항이 없습니다.</S.NoData>
				)}
			</S.List>
		</S.Body>
	);
}

export default More;
