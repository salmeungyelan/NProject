import { useEffect, useRef, useState } from 'react';

import useInput from 'hooks/useInput';
import useApi from 'hooks/useApi';
import { formatBusinessNum, formatPhoneNum } from 'utils/formatNum';
import MESSAGE from 'constants/message';

import * as S from './index.styles';

import InputBox from 'components/@common/InputBox';
import Notice from 'components/@common/Notice';
import Button from 'components/@common/Button';
import IdResult from '../IdResult';
import TempPwd from '../TempPwd';

function AccountLookup({ password }) {
	const { inputData, setInputData, handleChange } = useInput();

	const input = password ? '이메일 또는 아이디' : '업체명';
	const inputPlaceHolder = password ? '이메일 또는 아이디를' : '업체명을';

	const emailRef = useRef(null);
	const phoneNumRef = useRef(null);
	const businessNumRef = useRef(null);

	// 에러 메시지
	const [errorMessages, setErrorMessages] = useState({
		emailNId: '',
		companyName: '',
		contactNumber: '',
		businessNumber: '',
	});

	// 계정 정보
	const [notice, setNotice] = useState(false);

	// 결과
	const [result, setResult] = useState(false);

	// 결과 데이터
	const [resultData, setResultData] = useState('');

	const path = password ? '/users/reset-password' : '/users/find-email';

	const { trigger } = useApi({
		path,
		method: 'post',
		shouldFetch: false,
	});

	// 핸드폰 / 사업자 번호 포맷
	useEffect(() => {
		if (inputData.contactNumber) {
			setInputData(prev => ({
				...prev,
				contactNumber: formatPhoneNum(inputData.contactNumber),
			}));
		}

		if (inputData.businessNumber) {
			setInputData(prev => ({
				...prev,
				businessNumber: formatBusinessNum(inputData.businessNumber),
			}));
		}
	}, [inputData.contactNumber, inputData.businessNumber]);

	const handleSubmitAccount = async e => {
		e.preventDefault();

		const newErrorMessages = {
			emailNId: ' ',
			companyName: ' ',
			contactNumber: ' ',
			businessNumber: ' ',
		};

		let isValid = true;

		if (!inputData.emailNId && password) {
			newErrorMessages.emailNId = MESSAGE.FIND.ID;
			isValid = false;
			emailRef.current.focus();
		} else if (!inputData.companyName && !password) {
			newErrorMessages.companyName = MESSAGE.FIND.COMPANY;
			isValid = false;
			emailRef.current.focus();
		} else if (!inputData.contactNumber) {
			newErrorMessages.contactNumber = MESSAGE.FIND.NUMBER;
			isValid = false;
			phoneNumRef.current.focus();
		} else if (!inputData.businessNumber) {
			newErrorMessages.businessNumber = MESSAGE.FIND.CO_NUMBER;
			isValid = false;
			businessNumRef.current.focus();
		}

		setErrorMessages(newErrorMessages);

		if (!isValid) return;

		const idData = {
			...inputData,
			contactNumber: inputData.contactNumber.replace(/-/g, ''),
			businessNumber: inputData.businessNumber.replace(/-/g, ''),
		};

		const name =
			password && inputData.emailNId.includes('@') ? 'email' : 'username';

		const pwData = {
			[name]: inputData.emailNId,
			contactNumber: inputData.contactNumber.replace(/-/g, ''),
			businessNumber: inputData.businessNumber.replace(/-/g, ''),
		};

		const req = await trigger({
			data: password ? pwData : idData,
			showBoundary: false,
		});

		const { error } = req || {};

		if (error) {
			setNotice(true);
		} else {
			setResultData(req.data);
			setResult(true);
		}
	};

	return (
		<>
			{result ? (
				password ? (
					<TempPwd data={resultData} />
				) : (
					<IdResult data={resultData} />
				)
			) : (
				<S.FormBox onSubmit={handleSubmitAccount}>
					<InputBox
						title={input}
						name={password ? 'emailNId' : 'companyName'}
						placeholder={`${inputPlaceHolder} 입력해 주세요.`}
						onChange={handleChange}
						ref={emailRef}
						message={
							(password ? errorMessages.emailNId : errorMessages.companyName) ||
							' '
						}
						register
					/>

					<InputBox
						title="전화번호"
						name="contactNumber"
						value={inputData.contactNumber}
						placeholder="전화번호를 입력해 주세요."
						onChange={handleChange}
						ref={phoneNumRef}
						message={errorMessages.contactNumber || ' '}
						register
					/>

					<InputBox
						title="사업자 등록 번호"
						name="businessNumber"
						value={inputData.businessNumber}
						placeholder="업체의 사업자 등록 번호를 입력해 주세요."
						onChange={handleChange}
						ref={businessNumRef}
						message={errorMessages.businessNumber || ' '}
						register
					/>

					<S.ButtonBox>
						<Notice notice={notice} />

						<Button size="default" variant="default" type="submit">
							{password ? '임시 비밀번호 발급' : '아이디 찾기'}
						</Button>
					</S.ButtonBox>
				</S.FormBox>
			)}
		</>
	);
}

export default AccountLookup;
