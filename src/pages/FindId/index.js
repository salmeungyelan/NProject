import { Link } from 'react-router-dom';

import useLayout from 'hooks/useLayout';

import * as S from './index.styles';

import Logo from 'components/@common/Logo';
import IdLookup from 'components/pages/FindId/IdLookup';
import IdResult from 'components/pages/FindId/IdResult';

function FindId() {
	useLayout();

	return (
		<S.Body>
			<S.Top>
				<S.LogoBox>
					<Link to="/">
						<Logo size={'default'} />
					</Link>
				</S.LogoBox>

				<IdLookup />
				{/* <IdResult /> */}
			</S.Top>

			<S.Bottom>
				<img src="/assets/images/id-bottom-img.png" />
			</S.Bottom>
		</S.Body>
	);
}

export default FindId;
