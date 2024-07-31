import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

import usePathname from 'hooks/usePathname';
import useInput from 'hooks/useInput';
import { otherTabsState } from 'recoil/atom/otherTabs.atom';
import useApi from 'hooks/useApi';
import LINK from 'constants/link';
import { formatPhoneNum } from 'utils/formatNum';

import * as S from './index.styles';

import InputBox from 'components/@common/InputBox';
import Address from 'components/@common/Address';
import Button from 'components/@common/Button';
import ApplicationDetails from './ApplicationDetails';

function ApplicationModal(props) {
	const { title, onClose, tempSave, disabled, listTrigger, progress } = props;

	// 뷰탭 인스타 및 홈페이지 제작은 주소 제외
	const { path, pathname } = usePathname();

	const { inputData, setInputData, handleChange } = useInput();

	// 신청 데이터
	const [applyData, setApplyData] = useRecoilState(otherTabsState);

	// 이전 / 다음
	const [nextStep, setNextStep] = useState(false);

	const { result, trigger } = useApi({
		path: `/client/${path}s/${tempSave}`,
		shouldFetch: tempSave,
	});

	useEffect(() => {
		if (applyData) {
			setInputData(prev => ({
				...prev,
				postalCode: applyData.postalCode,
				address: applyData.address,
				detailAddress: applyData.addressDetail,
				companyName: applyData.companyName,
				contactNumber: formatPhoneNum(applyData.contactNumber),
				smartplaceLink: applyData.smartplaceLink,
			}));
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

		if (!detailAddress && !applyData.addressDetail) {
			addressRef.current.focus();
			setErrMsg('상세 주소를 입력해 주세요.');
		} else {
			setNextStep(true);

			setApplyData(prev => ({
				...prev,
				...restInputData,
				addressDetail: detailAddress,
			}));
		}
	};

	return (
		<S.Background>
			<S.Container>
				<S.Header>
					<S.Title>{title} 신청</S.Title>
					<S.CloseBtn onClick={onClose} />
				</S.Header>

				<S.Step $nextStep={nextStep}>
					<img src={`/assets/icons/${nextStep ? 'form-fin' : 'form'}.svg`} />

					<div>
						<span>업체 정보</span>
						<p>{title} 신청</p>
					</div>
				</S.Step>

				{!nextStep && (
					<>
						<S.Body $path={path}>
							<InputBox
								title="업체명"
								name="companyName"
								value={inputData.companyName}
								onChange={handleChange}
								message
								disabled={disabled}
							/>
							<InputBox
								title="전화번호"
								name="contactNumber"
								value={inputData.contactNumber}
								onChange={handleChange}
								disabled={disabled}
								message
							/>
							{pathname === LINK.TEAM && (
								<Address
									postalCode={inputData.postalCode}
									place={inputData.address}
									detail={inputData.detailAddress}
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
								value={inputData.smartplaceLink}
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
					</>
				)}

				{nextStep && (
					<ApplicationDetails
						setNextStep={setNextStep}
						tempSave={tempSave}
						trigger={trigger}
						disabled={disabled}
						onClose={onClose}
						listTrigger={listTrigger}
						progress={progress}
					/>
				)}
			</S.Container>
		</S.Background>
	);
}

export default ApplicationModal;
