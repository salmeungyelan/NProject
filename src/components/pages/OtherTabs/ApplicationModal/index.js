import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import usePathname from 'hooks/usePathname';
import useInput from 'hooks/useInput';
import { otherTabsState } from 'recoil/atom/otherTabs.atom';
import decodeJWT from 'utils/token';
import useApi from 'hooks/useApi';
import LINK from 'constants/link';
import { formatPhoneNum } from 'utils/formatNum';

import * as S from './index.styles';

import InputBox from 'components/@common/InputBox';
import Address from 'components/@common/Address';
import Button from 'components/@common/Button';
import ApplicationDetails from './ApplicationDetails';
import Modal from 'components/@common/Modal';

function ApplicationModal(props) {
	const { title, onClose, tempSave, disabled, listTrigger, progress } = props;

	// 뷰탭 인스타 및 홈페이지 제작은 주소 제외
	const { path, pathname } = usePathname();

	const { inputData, setInputData, handleChange } = useInput();

	// 신청할 데이터
	const [applyData, setApplyData] = useRecoilState(otherTabsState);

	const decodedPayload = decodeJWT('accessToken');
	const { sub } = decodedPayload;

	// 이전 / 다음
	const [nextStep, setNextStep] = useState(0);

	const [modalContent, setModalContent] = useState(null);

	const { result, trigger } = useApi({
		path: tempSave ? `/client/${path}s/${tempSave}` : `/users/${sub}`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setApplyData(result.data);

			if (applyData) {
				setInputData(prev => ({
					...prev,
					postalCode: applyData.postalCode,
					address: applyData.address,
					addressDetail: applyData.addressDetail,
					companyName: applyData.companyName,
					contactNumber: formatPhoneNum(applyData.contactNumber),
					smartplaceLink: applyData.smartplaceLink,
				}));
			}
		}
	}, [result.data]);

	// 연락처 포맷
	useEffect(() => {
		if (inputData.contactNumber) {
			setInputData(prev => ({
				...prev,
				contactNumber: formatPhoneNum(inputData.contactNumber),
			}));
		}

		if (inputData.detailAddress) {
			setApplyData(prev => ({
				...prev,
				addressDetail: inputData.detailAddress,
			}));
		}
	}, [inputData.contactNumber, inputData.detailAddress]);

	// 주소 바뀔 때
	const handleAddressChange = (name, value) => {
		setInputData(prevData => ({
			...prevData,
			[name]: value,
		}));
	};

	const addressRef = useRef(null);
	const [errMsg, setErrMsg] = useState('');

	// 다음 버튼 클릭
	const handleClickNext = () => {
		const { detailAddress, ...restInputData } = inputData;

		setNextStep(1);

		setApplyData(prev => ({
			...prev,
			...restInputData,
			addressDetail: detailAddress,
		}));
	};

	return (
		<S.Background>
			{nextStep === 0 && (
				<S.Container>
					<S.Header>
						<S.Title>{title} 신청</S.Title>
						<S.CloseBtn onClick={onClose} />
					</S.Header>

					<S.Step>
						<img src={`/assets/icons/form.svg`} />

						<div>
							<span>업체 정보</span>
							<p>{title} 신청</p>
						</div>
					</S.Step>

					<S.Body $path={path}>
						<InputBox
							title="업체명"
							name="companyName"
							value={inputData.companyName || ''}
							placeholder="업체명을 입력해 주세요."
							onChange={handleChange}
							message
							disabled={disabled}
						/>
						<InputBox
							title="전화번호"
							name="contactNumber"
							value={inputData.contactNumber || ''}
							placeholder="전화번호를 입력해 주세요."
							onChange={handleChange}
							disabled={disabled}
							message
						/>
						{pathname === LINK.TEAM && (
							<Address
								postalCode={inputData.postalCode}
								place={inputData.address}
								detail={inputData.addressDetail}
								onChange={handleAddressChange}
								disabled={disabled}
								button={!disabled}
								ref={addressRef}
								message={errMsg || ' '}
							/>
						)}

						<InputBox
							name="smartplaceLink"
							title="스마트 플레이스 링크"
							value={inputData.smartplaceLink || ''}
							placeholder={
								disabled
									? '등록된 스마트 플레이스 링크가 없습니다.'
									: '스마트 플레이스 링크를 입력해 주세요.'
							}
							onChange={handleChange}
							disabled={disabled}
							message
						/>
					</S.Body>

					<S.ButtonBox>
						<Button size="height" variant="default" onClick={handleClickNext}>
							다음
						</Button>
					</S.ButtonBox>
				</S.Container>
			)}

			{nextStep === 1 && (
				<ApplicationDetails
					title={title}
					onClose={onClose}
					trigger={trigger}
					progress={progress}
					tempSave={tempSave}
					disabled={disabled}
					listTrigger={listTrigger}
					nextStep={nextStep}
					setNextStep={setNextStep}
					modalContent={modalContent}
					setModalContent={setModalContent}
				/>
			)}

			{nextStep === 2 && (
				<Modal
					img="modal-check.svg"
					title="알림"
					content={modalContent}
					onClose={onClose}
					otherTabs={nextStep}
				/>
			)}
		</S.Background>
	);
}

export default ApplicationModal;
