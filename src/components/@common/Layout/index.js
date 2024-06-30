import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { includeFooterState, includeHeaderState } from 'recoil/atom/index.atom';
import useApi from 'hooks/useApi';
import { deleteCookie } from 'utils/cookie';
import LINK from 'constants/link';
import usePathname from 'hooks/usePathname';

import Footer from './Footer';
import Header from './Header';
import MobileHeader from './Mobile/Header';

const applyBtn = [
	{ url: 'review', title: '리뷰' },
	{ url: '/visit_experience', title: '체험단' },
	{ url: '/viewtab_instagram', title: '뷰탭&인스타' },
	{ url: '/website_outsourcing', title: '홈페이지 제작' },
];

function Layout() {
	const path = usePathname();
	const matchedBtn = applyBtn.find(btn => path.includes(btn.url));

	const includeHeader = useRecoilValue(includeHeaderState);
	const includeFooter = useRecoilValue(includeFooterState);

	const navigate = useNavigate();

	const { trigger: logoutTrigger } = useApi({
		path: '/auth/logout',
		shouldFetch: false,
	});

	const handleLogout = async () => {
		try {
			await logoutTrigger({});

			deleteCookie('accessToken');
			deleteCookie('refreshToken');

			navigate(LINK.LOGIN);
		} catch (error) {
			console.error('로그아웃 실패', error);
		}
	};

	return (
		<>
			{includeHeader && <Header logout={handleLogout} applyBtn={matchedBtn} />}
			{includeHeader && (
				<MobileHeader logout={handleLogout} applyBtn={matchedBtn} />
			)}
			<Outlet />
			{includeFooter && <Footer />}
		</>
	);
}

export default Layout;

// const logout = async () => {
// 	await getApi('/auth/logout');
// };

// const mutation = useMutation({
// 	mutationFn: logout,
// 	onSuccess: () => {
// 		deleteCookie('accessToken');
// 		deleteCookie('refreshToken');
// 		navigate('/');
// 	},
// 	onError: error => {
// 		console.error('로그아웃 실패', error);
// 	},
// });

// handleLogout
// await mutation.mutate();
