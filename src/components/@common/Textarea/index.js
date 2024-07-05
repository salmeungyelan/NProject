import { forwardRef } from 'react';

import * as S from './index.styles';

function Textarea(props, ref) {
	const { variant, size, ...rest } = props;

	return <S.Textarea $variant={variant} size={size} ref={ref} {...rest} />;
}

export default forwardRef(Textarea);
