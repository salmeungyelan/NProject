import { useLocation } from 'react-router-dom';

const usePathname = () => {
	const { pathname } = useLocation();
	const path = pathname.split('/')[1];

	return path;
};

export default usePathname;
