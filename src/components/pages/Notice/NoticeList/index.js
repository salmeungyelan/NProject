import { Link } from 'react-router-dom';

import LINK from 'constants/link';

import * as S from './index.styles';

function NoticeList({ list }) {
	return (
		<S.Body>
			{list.map(notice => (
				<S.Box key={notice.id}>
					<Link to={LINK.NOTICE_POST + `/${notice.id}`}>
						<S.ImportantBox>
							{notice.noticeContentType === '중요' ? (
								<>
									<img src="/assets/icons/pin.svg" alt="pin" />
									<S.Important>중요</S.Important>
									<S.Title>{notice.title}</S.Title>
								</>
							) : (
								<S.Title>{notice.title}</S.Title>
							)}
						</S.ImportantBox>

						<S.Content>
							<S.Description>{notice.content}</S.Description>
							<S.Date>{notice.createDate}</S.Date>
						</S.Content>
					</Link>
				</S.Box>
			))}
		</S.Body>
	);
}

export default NoticeList;
