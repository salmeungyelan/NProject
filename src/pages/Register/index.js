import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useModal from 'hooks/useModal';
import useInput from 'hooks/useInput';
import useApi from 'hooks/useApi';
import LINK from 'constants/link';
import { formatBusinessNum, formatPhoneNum } from 'utils/formatNum';
import MESSAGE from 'constants/message';
import VALIDATE from 'utils/regex';

import * as S from './index.styles';

import Logo from 'components/@common/Logo';
import InputBox from 'components/@common/InputBox';
import Address from 'components/@common/Address';
import Line from 'components/@common/Line';
import Button from 'components/@common/Button';
import Modal from 'components/@common/Modal';
import TermsModal from 'components/pages/Register/TermsModal';

function Register() {
	const { modalState, openModal, closeModal } = useModal();
	const { inputData, setInputData, handleChange } = useInput();

	const navigate = useNavigate();

	const emailRef = useRef(null);
	const idRef = useRef(null);
	const pwRef = useRef(null);
	const pwCheckRef = useRef(null);
	const companyRef = useRef(null);
	const contactRef = useRef(null);
	const addressRef = useRef(null);
	const businessRef = useRef(null);
	const termsRef = useRef(null);

	// 보낼 데이터
	const [data, setData] = useState({});

	// 약관 동의 및 약관 아이디
	const [termsId, setTermsId] = useState('');
	const [terms, setTerms] = useState({
		allChecked: false,
		service: false,
		privacy: false,
	});

	// 띄울 에러 메시지
	const [errorMsg, setErrorMsg] = useState({
		email: ' ',
		username: ' ',
		password: ' ',
		passwordCheck: ' ',
		companyName: ' ',
		contactNumber: ' ',
		address: ' ',
		businessNumber: ' ',
		terms: ' ',
	});

	// api
	const { trigger } = useApi({
		path: '/users',
		shouldFetch: false,
	});

	// 약관 모달
	const handleOpenModal = id => () => {
		openModal();
		setTermsId(id);
	};

	const handleCloseModal = agreed => {
		closeModal(false);

		if (agreed) {
			setTerms(prevState => {
				const newTerms = { ...prevState };
				if (termsId === 1) {
					newTerms.service = true;
				} else if (termsId === 2) {
					newTerms.privacy = true;
				}
				newTerms.allChecked = newTerms.service && newTerms.privacy;
				return newTerms;
			});
		}
		setTermsId('');
	};

	const handleAllCheckedChange = () => {
		const newCheckedStatus = !terms.allChecked;

		setTerms({
			allChecked: newCheckedStatus,
			service: newCheckedStatus,
			privacy: newCheckedStatus,
		});
	};

	const handleIndividualChange = name => {
		setTerms(prevState => {
			const newTerms = {
				...prevState,
				[name]: !prevState[name],
			};
			newTerms.allChecked = newTerms.service && newTerms.privacy;
			return newTerms;
		});
	};

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
	}, [data, inputData.contactNumber, inputData.businessNumber]);

	// 주소
	const [location, setLocation] = useState({
		postalCode: '',
		address: '',
		detailAddress: '',
	});

	const handleAddressChange = (name, value) => {
		setLocation(prevData => ({
			...prevData,
			[name]: value,
		}));
	};

	const dataSet = () => {
		setData(prev => ({
			...prev,
			email: inputData.email,
			username: inputData.username,
			password: inputData.password,
			companyName: inputData.companyName,
			contactNumber: inputData.contactNumber.replace(/-/g, ''),
			postalCode: location.postalCode,
			address: location.address,
			addressDetail: location.detailAddress,
			businessNumber: inputData.businessNumber.replace(/-/g, ''),
			userTerms: [
				{
					termId: 1,
					isAgreed: terms.privacy,
				},
				{
					termId: 2,
					isAgreed: terms.service,
				},
			],
		}));
	};

	const [registerSuccess, setRegisterSuccess] = useState(false);

	// 회원가입 로직 미친 거 아님? 뒤져라...
	const handleSubmit = async e => {
		e.preventDefault();

		const newErrorMessages = {
			email: ' ',
			username: ' ',
			password: ' ',
			passwordCheck: ' ',
			companyName: ' ',
			contactNumber: ' ',
			postalCode: ' ',
			address: ' ',
			addressDetail: ' ',
			businessNumber: ' ',
			terms: ' ',
		};

		let isValid = true;

		if (!inputData.email) {
			newErrorMessages.email = MESSAGE.JOIN.EMAIL;
			isValid = false;
			emailRef.current.focus();
		} else if (inputData.email && !inputData.email.match(VALIDATE.email)) {
			newErrorMessages.email = MESSAGE.JOIN.EMAIL_REGEX;
			isValid = false;
			emailRef.current.focus();
		} else if (!inputData.username) {
			newErrorMessages.username = MESSAGE.JOIN.USERNAME;
			isValid = false;
			idRef.current.focus();
		} else if (inputData.username && !inputData.username.match(VALIDATE.id)) {
			newErrorMessages.username = MESSAGE.JOIN.USERNAME_REGEX;
			isValid = false;
			idRef.current.focus();
		} else if (!inputData.password) {
			newErrorMessages.password = MESSAGE.JOIN.PW;
			isValid = false;
			pwRef.current.focus();
		} else if (
			inputData.password &&
			!inputData.password.match(VALIDATE.password)
		) {
			newErrorMessages.password = MESSAGE.JOIN.PW_REGEX;
			isValid = false;
			pwRef.current.focus();
		} else if (!inputData.passwordCheck) {
			newErrorMessages.passwordCheck = MESSAGE.JOIN.PW_CHECK;
			isValid = false;
			pwCheckRef.current.focus();
		} else if (inputData.passwordCheck !== inputData.password) {
			newErrorMessages.passwordCheck = MESSAGE.JOIN.SAME_PW;
			isValid = false;
			pwCheckRef.current.focus();
		} else if (!inputData.companyName) {
			newErrorMessages.companyName = MESSAGE.JOIN.COMPANY;
			isValid = false;
			companyRef.current.focus();
		} else if (!inputData.contactNumber) {
			newErrorMessages.contactNumber = MESSAGE.JOIN.NUMBER;
			isValid = false;
			contactRef.current.focus();
		} else if (
			!location.address &&
			!location.postalCode &&
			!location.detailAddress
		) {
			newErrorMessages.address = MESSAGE.JOIN.ADDRESS;
			isValid = false;
			addressRef.current.focus();
		} else if (!inputData.businessNumber) {
			newErrorMessages.businessNumber = MESSAGE.JOIN.CO_NUMBER;
			isValid = false;
			businessRef.current.focus();
		} else if (!terms.allChecked) {
			newErrorMessages.terms = MESSAGE.JOIN.TERMS;
			isValid = false;
			termsRef.current.focus();
		}

		setErrorMsg(newErrorMessages);

		if (!isValid) return;
		else dataSet();

		try {
			const newData = {
				email: inputData.email,
				username: inputData.username,
				password: inputData.password,
				companyName: inputData.companyName,
				contactNumber: inputData.contactNumber.replace(/-/g, ''),
				postalCode: location.postalCode,
				address: location.address,
				addressDetail: location.detailAddress,
				businessNumber: inputData.businessNumber.replace(/-/g, ''),
				userTerms: [
					{
						termId: 1,
						isAgreed: terms.privacy,
					},
					{
						termId: 2,
						isAgreed: terms.service,
					},
				],
			};

			const req = await trigger({
				method: 'post',
				data: newData,
				showBoundary: false,
			});

			setRegisterSuccess(true);
		} catch (error) {
			console.log(error);
		}
	};

	const handleCloseSuccessModal = () => {
		navigate(LINK.LOGIN);
		closeModal();
	};

	return (
		<S.Body>
			{registerSuccess && (
				<Modal
					img="modal-check.svg"
					title="알림"
					content="회원가입이 완료되었습니다."
					onClose={handleCloseSuccessModal}
				/>
			)}

			<S.LogoBox>
				<Link to={LINK.LOGIN}>
					<Logo size="default" />
				</Link>
			</S.LogoBox>

			<S.FormBox onSubmit={handleSubmit}>
				<InputBox
					title="이메일 입력"
					name="email"
					placeholder="이메일을 입력해 주세요."
					value={inputData.email}
					onChange={handleChange}
					ref={emailRef}
					message={errorMsg.email}
					register
				/>

				<InputBox
					title="아이디 입력"
					name="username"
					placeholder="아이디는 영어와 숫자로만 입력해 주세요."
					value={inputData.username}
					onChange={handleChange}
					ref={idRef}
					message={errorMsg.username}
					register
				/>

				<InputBox
					title="비밀번호 입력"
					name="password"
					type="password"
					placeholder="비밀번호를 입력해 주세요."
					value={inputData.password}
					onChange={handleChange}
					ref={pwRef}
					message={errorMsg.password}
					register
				/>

				<InputBox
					title="비밀번호 확인"
					name="passwordCheck"
					type="password"
					placeholder="비밀번호를 입력해 주세요."
					value={inputData.passwordCheck}
					onChange={handleChange}
					ref={pwCheckRef}
					message={errorMsg.passwordCheck}
					register
				/>

				<InputBox
					title="업체명"
					name="companyName"
					placeholder="업체명을 입력해 주세요."
					value={inputData.companyName}
					onChange={handleChange}
					ref={companyRef}
					message={errorMsg.companyName}
					register
				/>

				<InputBox
					title="전화번호"
					name="contactNumber"
					placeholder="전화번호를 입력해 주세요."
					value={inputData.contactNumber}
					onChange={handleChange}
					ref={contactRef}
					message={errorMsg.contactNumber}
					register
				/>

				<Address
					message={errorMsg.address}
					onChange={handleAddressChange}
					ref={addressRef}
					register
					button
				/>

				<InputBox
					title="사업자 등록 번호"
					name="businessNumber"
					placeholder="업체의 사업자 등록 번호를 입력해 주세요."
					value={inputData.businessNumber}
					onChange={handleChange}
					ref={businessRef}
					message={errorMsg.businessNumber}
					register
				/>

				<S.CheckBox>
					<S.H1>약관동의</S.H1>
					<S.Check>
						<S.CheckAll>
							<input
								type="checkbox"
								name=""
								id="check"
								checked={terms.allChecked}
								onChange={handleAllCheckedChange}
								ref={termsRef}
							/>
							<label htmlFor="check" />
							<h1>전체동의</h1>
						</S.CheckAll>
						<Line size="width" variant="lightGray" />
						<S.CheckItem>
							<input
								type="checkbox"
								name=""
								id="check_1"
								checked={terms.privacy}
								onChange={() => handleIndividualChange('privacy')}
							/>
							<label htmlFor="check_1" />
							<p onClick={handleOpenModal(2)}>
								개인정보 제공 및 활용에 동의합니다.
							</p>
							<span className="text_color">(필수)</span>
						</S.CheckItem>
						<S.CheckItem>
							<input
								type="checkbox"
								name=""
								id="check_2"
								checked={terms.service}
								onChange={() => handleIndividualChange('service')}
							/>
							<label htmlFor="check_2" />
							<p onClick={handleOpenModal(1)}>서비스 이용 약관에 동의합니다.</p>
							<span className="text_color">(필수)</span>
						</S.CheckItem>
					</S.Check>
					<span>{errorMsg.terms || ' '}</span>
				</S.CheckBox>

				{modalState && <TermsModal id={termsId} onClose={handleCloseModal} />}

				<S.ButtonBox>
					<Button size="default" variant="default" type="submit">
						회원가입
					</Button>
				</S.ButtonBox>
			</S.FormBox>
		</S.Body>
	);
}

export default Register;
