import * as S from './index.styles';

import Input from '../Input';

function InputBox(props) {
	const {
		register,
		title,
		password,
		check,
		value,
		placeholder,
		message,
		type,
		...rest
	} = props;

	return (
		<S.InputBox {...rest} $register={register}>
			<S.H1 $register={register} $message={message}>
				{title}
			</S.H1>

			<Input
				{...rest}
				size={register ? 'default' : 'height'}
				variant="default"
				type={type}
				value={value}
				placeholder={placeholder}
			/>

			{password && (
				<S.EX>
					<img src="/assets/icons/check.svg" />
					<span>8자 이상 32자 이하 입력 (공백 제외)</span>
				</S.EX>
			)}

			<S.Message $message={message}>{message}</S.Message>
		</S.InputBox>
	);
}

export default InputBox;
