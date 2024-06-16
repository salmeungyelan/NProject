import { Link, useLocation } from 'react-router-dom';

import * as S from './index.styles';

import Logo from 'components/@common/Logo';
import AccountLookup from 'components/pages/FindAccounts/AccountLookup';
import IdResult from 'components/pages/FindAccounts/IdResult';
import TempPwd from 'components/pages/FindAccounts/TempPwd';

function FindAccounts() {
	const { pathname } = useLocation();
	const accounts = pathname.split('/')[2] === 'password';

	return (
		<S.Body>
			<S.Top>
				<S.LogoBox>
					<Link to="/">
						<Logo size={'default'} />
					</Link>
				</S.LogoBox>

				<AccountLookup password={!!accounts} />
				{/* {accounts ? <TempPwd /> : <IdResult />} */}
			</S.Top>

			<S.Bottom>
				<img src="/assets/images/id-bottom-img.png" />
			</S.Bottom>
		</S.Body>
	);
}

export default FindAccounts;
