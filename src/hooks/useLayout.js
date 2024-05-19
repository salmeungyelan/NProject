import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { includeFooterState, includeHeaderState } from 'recoil/atom/index.atom';

const useLayout = () => {
	const setIncludeFooter = useSetRecoilState(includeFooterState);
	const setIncludeHeader = useSetRecoilState(includeHeaderState);

	useEffect(() => {
		setIncludeFooter(false);
		setIncludeHeader(false);

		return () => {
			setIncludeFooter(true);
			setIncludeHeader(true);
		};
	}, [setIncludeFooter, setIncludeHeader]);
};

export default useLayout;
