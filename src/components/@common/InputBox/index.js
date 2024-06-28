import React, { forwardRef } from 'react';

import * as S from './index.styles';

function InputBox(props, ref) {
	const {
		register,
		title,
		password,
		check,
		value,
		placeholder,
		message,
		type,
		id,
		name,
		...rest
	} = props;

	return (
		<S.InputBox {...rest} $register={register}>
			<S.H1 $register={register} $message={message}>
				{title}
			</S.H1>

			<S.Input
				id={id}
				name={name}
				size={register ? 'default' : 'height'}
				type={type}
				ref={ref}
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

export default forwardRef(InputBox);
