import { Link } from 'react-router-dom';

import LINK from 'constants/link';

import * as S from './index.styles';

function GuideList({ list }) {
	return (
		<S.Body>
			{list.map(guide => (
				<S.Box key={guide.id}>
					<Link to={LINK.GUIDE_POST + `/${guide.id}`}>
						<S.Title>{guide.title}</S.Title>

						<S.Content>
							<S.Description>{guide.content}</S.Description>
							<S.Date>{guide.createDate}</S.Date>
						</S.Content>
					</Link>
				</S.Box>
			))}
		</S.Body>
	);
}

export default GuideList;
