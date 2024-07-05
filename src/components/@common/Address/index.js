import { forwardRef, useEffect, useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

import * as S from './index.styles';

import Button from '../Button';

const scriptUrl =
	'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

function Address(props, ref) {
	const {
		button,
		register,
		postalCode,
		detail,
		place,
		onChange,
		message,
		...rest
	} = props;

	const size = register ? 'default' : 'height';

	const open = useDaumPostcodePopup(scriptUrl);

	const [postcode, setPostcode] = useState('');
	const [address, setAddress] = useState('');
	const [detailAddress, setDetailAddress] = useState('');

	useEffect(() => {
		setPostcode(postalCode);
		setAddress(place);
		setDetailAddress(detail);
	}, [postalCode, place, detail]);

	const handleComplete = data => {
		let fullAddress = data.address;
		let extraAddress = '';

		if (data.addressType === 'R') {
			if (data.bname !== '') {
				extraAddress += data.bname;
			}
			if (data.buildingName !== '') {
				extraAddress +=
					extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
			}
			fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
		}

		setPostcode(data.zonecode);
		setAddress(fullAddress);

		onChange('postalCode', data.zonecode);
		onChange('address', fullAddress);
	};

	const handleClickPostCode = () => {
		open({ onComplete: handleComplete });
	};

	const handleChangeDetail = e => {
		setDetailAddress(e.target.value);
		onChange('detailAddress', e.target.value);
	};

	return (
		<S.Address {...rest}>
			<S.H1 $register={register}>주소</S.H1>
			<div>
				<S.Input
					size={size}
					variant="default"
					type="text"
					placeholder="우편 번호"
					value={postcode}
					ref={ref}
					{...rest}
				/>
				{button && (
					<Button
						variant="default"
						size={size}
						onClick={() => handleClickPostCode()}
					>
						주소 찾기
					</Button>
				)}
			</div>
			<S.Input
				size={size}
				variant="default"
				type="text"
				placeholder="주소"
				value={address}
				{...rest}
			/>
			<S.Input
				size={size}
				variant="default"
				type="text"
				placeholder="상세 주소"
				value={detailAddress}
				onChange={e => handleChangeDetail(e)}
				{...rest}
			/>
			{message && <p>{message}</p>}
		</S.Address>
	);
}

export default forwardRef(Address);
