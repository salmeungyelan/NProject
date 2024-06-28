import { Link, useLocation } from 'react-router-dom';

import * as S from './index.styles';

import Logo from 'components/@common/Logo';
import AccountLookup from 'components/pages/FindAccounts/AccountLookup';
import LINK from 'constants/link';

function FindAccounts() {
	const { pathname } = useLocation();
	const accounts = pathname.split('/')[2] === 'password';

	return (
		<S.Body>
			<S.Top>
				<S.LogoBox>
					<Link to={LINK.LOGIN}>
						<Logo size={'default'} />
					</Link>
				</S.LogoBox>

				<AccountLookup password={!!accounts} />
			</S.Top>

			<S.Bottom>
				<img src="/assets/images/id-bottom-img.png" />
			</S.Bottom>
		</S.Body>
	);
}

export default FindAccounts;
