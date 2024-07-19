import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Cookies from 'js-cookie';

import decodeJWT from 'utils/token';
import { otherTabsState } from 'recoil/atom/otherTabs.atom';
import LINK from 'constants/link';

import Footer from './Footer';
import Header from './Header';
import MobileHeader from './Mobile/Header';

function Layout() {
	const decodedPayload = decodeJWT('accessToken');
	const { companyName } = decodedPayload;

	const navigate = useNavigate();
	const [otherTab, setOtherTab] = useRecoilState(otherTabsState);

	const handleLogout = () => {
		Cookies.remove('accessToken');
		Cookies.remove('refreshToken');
		setOtherTab({});
		navigate(LINK.LOGIN);
	};

	return (
		<>
			<Header logout={handleLogout} name={companyName} />
			<MobileHeader logout={handleLogout} name={companyName} />

			<Outlet />
			<Footer />
		</>
	);
}

export default Layout;
