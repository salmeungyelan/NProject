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
		place,
		detail,
		onChange,
		message,
		disabled,
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
					type="text"
					value={postcode || ''}
					placeholder="우편 번호"
					ref={ref}
					size={size}
					disabled={disabled}
					readOnly
				/>
				{button && (
					<Button variant="default" size={size} onClick={handleClickPostCode}>
						주소 찾기
					</Button>
				)}
			</div>
			<S.Input
				type="text"
				value={address || ''}
				placeholder="주소"
				size={size}
				disabled={disabled}
				readOnly
			/>
			<S.Input
				type="text"
				value={detailAddress || ''}
				placeholder="상세 주소"
				onChange={handleChangeDetail}
				size={size}
				disabled={disabled}
			/>
			{message && <p>{message}</p>}
		</S.Address>
	);
}

export default forwardRef(Address);
