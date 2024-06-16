import * as S from './index.styles';

import Input from '../Input';
import Button from '../Button';

function Address(props) {
	const { button, register, number, address, detail, message, ...rest } = props;

	const size = register ? 'default' : 'height';

	return (
		<S.Address {...rest}>
			<S.H1 $register={register}>주소</S.H1>
			<div>
				<Input
					size={size}
					variant={'default'}
					type="text"
					placeholder="우편 번호"
					value={number}
					required
					{...rest}
				/>
				{button && (
					<Button variant={'default'} size={size} shadow>
						주소 찾기
					</Button>
				)}
			</div>
			<Input
				size={size}
				variant={'default'}
				type="text"
				placeholder="주소"
				value={address}
				required
				{...rest}
			/>
			<Input
				size={size}
				variant={'default'}
				type="text"
				placeholder="상세 주소"
				value={detail}
				required
				{...rest}
			/>
			{message && <p>{message}</p>}
		</S.Address>
	);
}

export default Address;
