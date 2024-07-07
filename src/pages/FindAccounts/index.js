import { Link } from 'react-router-dom';

import usePathname from 'hooks/usePathname';
import LINK from 'constants/link';

import * as S from './index.styles';

import Logo from 'components/@common/Logo';
import AccountLookup from 'components/pages/FindAccounts/AccountLookup';

function FindAccounts() {
	const { pathname } = usePathname();
	const accounts = pathname.includes('password');

	return (
		<S.Body>
			<S.Top>
				<S.LogoBox>
					<Link to={LINK.LOGIN}>
						<Logo size="default" />
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
