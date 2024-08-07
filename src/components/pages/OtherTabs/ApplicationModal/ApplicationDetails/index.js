import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { ko } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

import decodeJWT from 'utils/token';
import usePathname from 'hooks/usePathname';
import useInput from 'hooks/useInput';
import useModal from 'hooks/useModal';
import { otherTabsState } from 'recoil/atom/otherTabs.atom';
import LINK from 'constants/link';
import dateFormat from 'utils/formatDate';
import MESSAGE from 'constants/message';

import * as S from './index.styles';

import Input from 'components/@common/Input';
import InputBox from 'components/@common/InputBox';
import Textarea from 'components/@common/Textarea';
import Button from 'components/@common/Button';
import Modal from 'components/@common/Modal';

function ApplicationDetails(props) {
	const {
		setNextStep,
		tempSave,
		trigger,
		disabled,
		onClose,
		listTrigger,
		progress,
		nextStep,
		title,
		setModalContent,
	} = props;

	const decodedPayload = decodeJWT('accessToken');
	const { sub } = decodedPayload;

	const { path, pathname } = usePathname();
	const { inputData, setInputData, handleChange } = useInput();

	const { modalState, openModal, closeModal } = useModal();

	const [applyData, setApplyData] = useRecoilState(otherTabsState);

	const [isCalendar, SetIsCalendar] = useState(false);

	const initiallySelectedDate = new Date();
	const date = dateFormat(initiallySelectedDate);

	const [startDate, setStartDate] = useState(date);
	const [endDate, setEndDate] = useState(date);

	const [errorMsg, setErrorMsg] = useState({
		date: ' ',
		availableService: ' ',
		requirement: ' ',
	});

	const startRef = useRef(null);
	const endRef = useRef(null);
	const serviceRef = useRef(null);
	const reqRef = useRef(null);

	useEffect(() => {
		if (applyData) {
			setInputData(prev => ({
				...prev,
				availableService: applyData.availableService,
				requirement: applyData.requirement,
			}));

			setStartDate(applyData.visitStartDate);
			setEndDate(applyData.visitEndDate);
		}
	}, [applyData]);

	// 달력 열고 닫기
	const handleOpenCalendar = field => {
		SetIsCalendar(isCalendar === field ? null : field);
	};

	// 달력 열고 날짜 클릭시 자동 닫기
	const handleSelectDate = date => {
		if (isCalendar === 'start') {
			setInputData(prev => ({
				...prev,
				visitStartDate: dateFormat(date),
			}));
			setStartDate(date);
		} else if (isCalendar === 'end') {
			setInputData(prev => ({
				...prev,
				visitEndDate: dateFormat(date),
			}));
			setEndDate(date);
		}
		SetIsCalendar(null);
	};

	// 이전으로 가기 버튼
	const handleClickPrev = () => {
		setNextStep(0);

		setApplyData(prev => ({
			...prev,
			visitStartDate: inputData.visitStartDate || applyData.visitStartDate,
			visitEndDate: inputData.visitEndDate || applyData.visitEndDate,
			availableService: inputData.availableService,
			requirement: inputData.requirement,
		}));
	};

	const handleSubmit = async status => {
		let isValid = true;

		if (pathname === LINK.TEAM) {
			if (!inputData.visitStartDate && !applyData.visitStartDate) {
				isValid = false;
				setErrorMsg({ date: MESSAGE.OTHER_TABS.START });
				startRef.current.focus();
			} else if (!inputData.visitEndDate && !applyData.visitEndDate) {
				isValid = false;
				setErrorMsg({ date: MESSAGE.OTHER_TABS.END });
				endRef.current.focus();
			} else if (!inputData.availableService) {
				isValid = false;
				setErrorMsg({ availableService: MESSAGE.OTHER_TABS.SERVICE });
				serviceRef.current.focus();
			} else if (!inputData.requirement) {
				isValid = false;
				setErrorMsg({ requirement: MESSAGE.OTHER_TABS.REQ });
				reqRef.current.focus();
			}
		} else if (!inputData.requirement) {
			isValid = false;
			setErrorMsg({ requirement: MESSAGE.OTHER_TABS.REQ });
			reqRef.current.focus();
		}

		if (!isValid) return;

		const urlPath = path.toUpperCase().replace(/-/g, '_');
		const otherStatus = `${urlPath}_STATUS_${status ? '01' : '02'}`;

		// 임시저장 수정일 경우에 id = 신청 아이디 / 신청하기일 경우 이 사람 아이디
		const { id, ...restApplyData } = applyData;

		const updatedData = {
			...restApplyData,
			authorId: sub,
			visitStartDate: inputData.visitStartDate,
			visitEndDate: inputData.visitEndDate,
			availableService: inputData.availableService,
			requirement: inputData.requirement,
			status: otherStatus,
		};

		const finalData = tempSave ? { ...updatedData, id: tempSave } : updatedData;

		const formData = new FormData();
		for (const [key, value] of Object.entries(finalData)) {
			formData.append(
				key,
				value instanceof Object ? JSON.stringify(value) : value,
			);
		}

		const request = await trigger({
			method: 'post',
			path: `/client/${path}s`,
			data: formData,
		});

		const { error } = request || {};

		if (error) {
			openModal();
		} else {
			const statusContent = status
				? '임시 저장되었습니다.'
				: '신청이 완료되었습니다.';

			setNextStep(2);

			setModalContent(statusContent);

			await listTrigger({ applyResult: true });
		}
	};

	const { mainKeywords, subKeywords, hashtags } = applyData;

	return (
		<>
			{modalState && (
				<Modal
					img="modal-excl.svg"
					title="알림"
					content="모든 정보를 입력한 후에 다시 신청해 주세요."
					onClose={closeModal}
					otherTabs={nextStep}
				/>
			)}

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

				<S.Body>
					{/* 체험단에만 들어가는 거 */}
					{pathname === LINK.TEAM && (
						<>
							<S.ExDate>
								<S.H1>체험 기간</S.H1>

								<div>
									<S.DateBox>
										<Input
											name="visitStartDate"
											value={
												inputData.visitStartDate ||
												applyData.visitStartDate ||
												'시작 일자'
											}
											placeholder="시작일"
											onClick={() => handleOpenCalendar('start')}
											ref={startRef}
											size="height"
											variant="default"
											disabled={disabled}
											readOnly
										/>
										{!disabled && (
											<S.CalendarImg
												src="/assets/icons/calendar.svg"
												onClick={() => handleOpenCalendar('start')}
												$isCalendar={isCalendar === 'start'}
											/>
										)}
										{isCalendar === 'start' && (
											<S.Wrapper>
												<S.DayPickers
													mode="single"
													locale={ko}
													selected={startDate}
													onSelect={handleSelectDate}
													showOutsideDays
												/>
											</S.Wrapper>
										)}
									</S.DateBox>

									<S.DateBox>
										<Input
											name="visitEndDate"
											value={
												inputData.visitEndDate ||
												applyData.visitEndDate ||
												'종료 일자'
											}
											placeholder="종료일"
											onClick={() => handleOpenCalendar('end')}
											ref={endRef}
											size="height"
											variant="default"
											disabled={disabled}
											readOnly
										/>
										{!disabled && (
											<S.CalendarImg
												src="/assets/icons/calendar.svg"
												onClick={() => handleOpenCalendar('end')}
												$isCalendar={isCalendar === 'end'}
											/>
										)}
										{isCalendar === 'end' && (
											<S.Wrapper>
												<S.DayPickers
													mode="single"
													locale={ko}
													selected={endDate}
													onSelect={handleSelectDate}
													showOutsideDays
												/>
											</S.Wrapper>
										)}
									</S.DateBox>
								</div>

								<p>{errorMsg.date}</p>
							</S.ExDate>

							<InputBox
								title="제공 서비스"
								name="availableService"
								value={inputData.availableService || ''}
								placeholder="제공 가능한 서비스를 입력해 주세요."
								onChange={handleChange}
								ref={serviceRef}
								disabled={disabled}
								message={errorMsg.availableService || ' '}
							/>
						</>
					)}

					{/* 홈페이지 제작에만 안 들어가는 거 */}
					{pathname !== LINK.DEVELOP &&
						['진행중', '완료'].includes(progress) && (
							<>
								<S.InputBox>
									<S.H1>메인 키워드</S.H1>
									<S.WordBox>
										{mainKeywords &&
											mainKeywords.map(main => (
												<S.Word key={main.id}>
													{main.name}
													{/* <img src="/assets/icons/modal-x.svg" /> */}
												</S.Word>
											))}
									</S.WordBox>
									<p></p>
								</S.InputBox>

								<S.InputBox>
									<S.H1>서브 키워드</S.H1>
									<S.WordBox>
										{subKeywords &&
											subKeywords.map(sub => (
												<S.Word key={sub.id}>
													{sub.name}
													{/* <img src="/assets/icons/modal-x.svg" /> */}
												</S.Word>
											))}
									</S.WordBox>
									<p></p>
								</S.InputBox>

								<S.InputBox>
									<S.H1>해시태그</S.H1>
									<S.HashTag>
										{hashtags &&
											hashtags.map(tag => (
												<S.Word key={tag.id}>
													{tag.name}
													{/* <img src="/assets/icons/modal-x.svg" /> */}
												</S.Word>
											))}
									</S.HashTag>
									<p></p>
								</S.InputBox>
							</>
						)}

					<S.InputBox>
						<S.H1>요청 사항</S.H1>
						<Textarea
							name="requirement"
							value={inputData.requirement || ''}
							placeholder={
								disabled
									? '등록된 요청 사항이 없습니다.'
									: '내용을 입력해 주세요.'
							}
							onChange={handleChange}
							ref={reqRef}
							disabled={disabled}
							size={pathname === LINK.DEVELOP ? 'web' : 'modal'}
							variant="default"
						/>
						<p>{errorMsg.requirement}</p>
					</S.InputBox>
				</S.Body>

				<S.ButtonBox disabled={disabled}>
					<div>
						<Button size="height" variant="white" onClick={handleClickPrev}>
							이전
						</Button>
						{!disabled && (
							<Button
								size="height"
								variant="white"
								onClick={() => handleSubmit(true)}
							>
								임시저장
							</Button>
						)}
					</div>
					<Button
						size="height"
						variant="default"
						onClick={disabled ? onClose : () => handleSubmit(false)}
					>
						{disabled ? '닫기' : '신청'}
					</Button>
				</S.ButtonBox>
			</S.Container>
		</>
	);
}

export default ApplicationDetails;
