import { forwardRef } from 'react';

import * as S from './index.styles';

function Textarea(props, ref) {
	const { size, variant, ...rest } = props;

	return <S.Textarea size={size} $variant={variant} ref={ref} {...rest} />;
}

export default forwardRef(Textarea);
