import { useLocation } from 'react-router-dom';

const usePathname = () => {
	const { pathname } = useLocation();
	const path = pathname.split('/')[1];

	return { path, pathname };
};

export default usePathname;
