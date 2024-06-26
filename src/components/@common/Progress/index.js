import usePathname from 'hooks/usePathname';

import * as S from './index.styles';

function Progress(props) {
	const { variant, children } = props;

	const path = usePathname();
	const review = path === 'review';

	return (
		<S.CheckProgress $variant={variant} $review={review}>
			{children}
		</S.CheckProgress>
	);
}

export default Progress;
