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

	return (
		<S.Body>
			<S.TitleBox>
				<S.Title>{children}</S.Title>
				<S.MoreClick>더보기</S.MoreClick>
			</S.TitleBox>

			<Line size={'width'} variant={'lightGray'} />

			<S.List>
				{List.map((el, idx) =>
					el.title.includes('중요') ? (
						<S.Important key={idx}>
							<div>
								<img src="/assets/images/icons/pin.svg" alt="pin" />
								<S.ImportantBtn>중요</S.ImportantBtn>
								<S.ListTitle>{el.title}</S.ListTitle>
							</div>
							<S.Date>{el.date}</S.Date>
						</S.Important>
					) : (
						<S.Commons key={idx}>
							<S.ListTitle>{el.title}</S.ListTitle>
							<S.Date>{el.date}</S.Date>
						</S.Commons>
					),
				)}
			</S.List>
		</S.Body>
	);
}

export default More;
