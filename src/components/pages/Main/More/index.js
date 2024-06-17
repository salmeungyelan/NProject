import { Link } from 'react-router-dom';

import LINK from 'constants/link';

import * as S from './index.styles';

import Line from 'components/@common/Line';

const List = [
	{ title: '중요 공지사항 1', date: '2024년 05월 28일' },
	{ title: '중요 공지다 tl...q...', date: '2024년 06월 02일' },
	{ title: '이 플젝 끝나기를...', date: '2024년 05월 24일' },
	{ title: '어렵네요 shit', date: '2024년 03월 23일' },
	{ title: '공지사항은 적어야 간지임 ㅋ', date: '2024년 02월 12일' },
];

function More(props) {
	const { children } = props;

	const links =
		children === '공지사항' ? LINK.NOTICE + '/1' : LINK.GUIDE + '/1';
	const moreLink = children === '공지사항' ? LINK.NOTICE : LINK.GUIDE;

	return (
		<S.Body>
			<S.TitleBox>
				<S.Title>{children}</S.Title>
				<S.MoreClick>
					<Link to={moreLink}>더보기</Link>
				</S.MoreClick>
			</S.TitleBox>

			<Line size={'width'} variant={'lightGray'} />

			<S.List>
				{List.map((el, idx) =>
					el.title.includes('중요') ? (
						<S.Important key={idx}>
							<Link to={links}>
								<img src="/assets/icons/pin.svg" alt="pin" />
								<S.ImportantBtn>중요</S.ImportantBtn>
								<S.ListTitle>{el.title}</S.ListTitle>
							</Link>

							<S.Date>{el.date}</S.Date>
						</S.Important>
					) : (
						<S.Commons key={idx}>
							<Link to={links}>
								<S.ListTitle>{el.title}</S.ListTitle>
								<S.Date>{el.date}</S.Date>
							</Link>
						</S.Commons>
					),
				)}
			</S.List>
		</S.Body>
	);
}

export default More;
