import usePathname from 'hooks/usePathname';

import LINK from 'constants/link';

import * as S from './index.styles';

function Progress(props) {
	const { variant, children } = props;

	const { path } = usePathname();
	const isReview = path === 'review';

	const variantSplit = variant?.split('_');
	const status = variantSplit && variantSplit[variantSplit.length - 1];

	return (
		<S.CheckProgress $variant={status} $isReview={isReview}>
			{children}
		</S.CheckProgress>
	);
}

export default Progress;
