import { useLocation } from 'react-router-dom';

import * as S from './index.styles';

function Progress(props) {
	const { variant, children } = props;

	const { pathname } = useLocation();
	const review = pathname.split('/')[1] === 'review';

	return (
		<S.CheckProgress $variant={variant} $review={review}>
			{children}
		</S.CheckProgress>
	);
}

export default Progress;
