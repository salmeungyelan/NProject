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

import Seo from 'components/@common/Seo/Seo';
import Logo from 'components/@common/Logo';
import InputBox from 'components/@common/InputBox';
import Address from 'components/@common/Address';
import Line from 'components/@common/Line';
import Button from 'components/@common/Button';
import Modal from 'components/@common/Modal';
import TermsModal from 'components/pages/Register/TermsModal';
import { useGlobalState } from 'contexts/GlobalContext';

function Register() {
	const { modalState, openModal, closeModal } = useModal();
	const { inputData, setInputData, handleChange } = useInput();

	const { hasErrorMessage, setHasErrorMessage } = useGlobalState();

	useEffect(() => {
		setHasErrorMessage('');
	}, [hasErrorMessage]);

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

	const [registerSuccess, setRegisterSuccess] = useState(false);

	// api
	const { trigger } = useApi({
		path: '/users',
		shouldFetch: false,
	});

	// 약관 동의 및 약관 아이디
	const [termsContent, setTermsContent] = useState({
		name: '',
		description: '',
	});

	const [termsData, setTermsData] = useState([]);

	const { result: termsResult } = useApi({
		path: `/client/terms?termCode=SERVICE_TERM`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (termsResult.data) {
			const updatedTermsData = termsResult.data.termList.map(term => ({
				...term,
				isAgreed: false,
			}));

			setTermsData(updatedTermsData);
		}
	}, [termsResult.data]);

	// 약관 모달
	const handleOpenModal = (name, description) => {
		openModal();
		setTermsContent({ name, description });
	};

	// 약관 모달 닫기
	const handleCloseModal = agreed => {
		closeModal(false);

		if (agreed) {
			setTermsData(prevTermsData =>
				prevTermsData.map(term =>
					term.name === termsContent.name ? { ...term, isAgreed: true } : term,
				),
			);
		}

		setTermsContent({});
	};

	// 전체 동의 체크박스 상태 변경
	const handleAllCheckedChange = event => {
		const { checked } = event.target;

		setTermsData(prevTermsData =>
			prevTermsData.map(term => ({ ...term, isAgreed: checked })),
		);
	};

	// 개별 동의 체크박스 상태 변경
	const handleIndividualChange = name => {
		setTermsData(prevTermsData =>
			prevTermsData.map(term =>
				term.name === name ? { ...term, isAgreed: !term.isAgreed } : term,
			),
		);
	};

	// 전체 동의 체크박스 상태
	const allChecked = termsData?.every(term => term.isAgreed);

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

	// 주소 변경
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
			userTerms: termsData.map(el => ({
				termId: el.id,
				isAgreed: el.isAgreed,
			})),
		}));
	};

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
			!location.detailAddress ||
			!location.address ||
			!location.postalCode
		) {
			newErrorMessages.address = MESSAGE.JOIN.ADDRESS;
			isValid = false;
			addressRef.current.focus();
		} else if (!inputData.businessNumber) {
			newErrorMessages.businessNumber = MESSAGE.JOIN.CO_NUMBER;
			isValid = false;
			businessRef.current.focus();
		} else if (!allChecked) {
			newErrorMessages.terms = MESSAGE.JOIN.TERMS;
			isValid = false;
			termsRef.current.focus();
		}

		setErrorMsg(newErrorMessages);

		if (!isValid) return;
		else dataSet();

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
			userTerms: termsData.map(el => ({
				termId: el.id,
				isAgreed: el.isAgreed,
			})),
		};

		const triggerResult = await trigger({ method: 'post', data: newData });
		const { error } = triggerResult || {};

		if (error) {
			newErrorMessages.email = error.response.data.message;
			if (error.response.data.message.includes('이메일')) {
				emailRef.current.focus();
			} else if (error.response.data.message.includes('아이디')) {
				idRef.current.focus();
			} else if (error.response.data.message.includes('사업자')) {
				businessRef.current.focus();
			}

			termsRef.current.focus();
		} else setRegisterSuccess(true);
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

			<Seo />

			<S.LogoBox>
				<Link to={LINK.LOGIN}>
					<Logo size="default" />
				</Link>
			</S.LogoBox>

			<S.FormBox onSubmit={handleSubmit}>
				<InputBox
					title="이메일 입력"
					name="email"
					value={inputData.email || ''}
					placeholder="이메일을 입력해 주세요."
					onChange={handleChange}
					ref={emailRef}
					message={errorMsg.email}
					maxLength="50"
					register
				/>

				<InputBox
					title="아이디 입력"
					name="username"
					value={inputData.username || ''}
					placeholder="아이디는 영어와 숫자로만 입력해 주세요."
					onChange={handleChange}
					ref={idRef}
					message={errorMsg.username}
					register
				/>

				<InputBox
					title="비밀번호 입력"
					name="password"
					type="password"
					value={inputData.password || ''}
					placeholder="비밀번호를 입력해 주세요."
					onChange={handleChange}
					ref={pwRef}
					message={errorMsg.password}
					register
				/>

				<InputBox
					title="비밀번호 확인"
					type="password"
					name="passwordCheck"
					value={inputData.passwordCheck || ''}
					placeholder="비밀번호를 입력해 주세요."
					onChange={handleChange}
					ref={pwCheckRef}
					message={errorMsg.passwordCheck}
					register
				/>

				<InputBox
					title="업체명"
					name="companyName"
					value={inputData.companyName || ''}
					placeholder="업체명을 입력해 주세요."
					onChange={handleChange}
					ref={companyRef}
					message={errorMsg.companyName}
					register
				/>

				<InputBox
					title="전화번호"
					name="contactNumber"
					value={inputData.contactNumber || ''}
					placeholder="전화번호를 입력해 주세요."
					onChange={handleChange}
					ref={contactRef}
					message={errorMsg.contactNumber}
					register
				/>

				<Address
					message={errorMsg.address}
					onChange={handleAddressChange}
					ref={addressRef}
					maxLength="50"
					register
					button
				/>

				<InputBox
					title="사업자 등록 번호"
					name="businessNumber"
					value={inputData.businessNumber || ''}
					placeholder="업체의 사업자 등록 번호를 입력해 주세요."
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
								id="allCheck"
								type="checkbox"
								onChange={handleAllCheckedChange}
								ref={termsRef}
								checked={allChecked}
							/>
							<label htmlFor="allCheck" />
							<h1>전체동의</h1>
						</S.CheckAll>

						<Line size="width" variant="lightGray" />

						{termsData?.map((term, i) => (
							<S.CheckItem key={i}>
								<input
									id={term.name}
									type="checkbox"
									onChange={() => handleIndividualChange(term.name)}
									checked={term.isAgreed}
								/>
								<label htmlFor={term.name} />
								<p onClick={() => handleOpenModal(term.name, term.description)}>
									{term.termLabel}
								</p>
								<span>(필수)</span>
							</S.CheckItem>
						))}
					</S.Check>
					<S.TermMsg>{errorMsg.terms}</S.TermMsg>
				</S.CheckBox>

				{modalState && (
					<TermsModal content={termsContent} onClose={handleCloseModal} />
				)}

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
