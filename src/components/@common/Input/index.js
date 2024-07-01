import { forwardRef } from 'react';
import * as S from './index.styles';

function Input(props, ref) {
	const { size, variant, ...rest } = props;

	return <S.Input size={size} $variant={variant} ref={ref} {...rest} />;
}

export default forwardRef(Input);
