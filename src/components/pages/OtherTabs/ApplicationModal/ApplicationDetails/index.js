import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { ko } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';

import usePathname from 'hooks/usePathname';
import useInput from 'hooks/useInput';
import useModal from 'hooks/useModal';
import { userAtom } from 'recoil/atom/user.atom';
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
	const { setNextStep, trigger, disabled, onClose } = props;

	const { path, pathname } = usePathname();
	const { inputData, setInputData, handleChange } = useInput();
	const { modalState, openModal, closeModal } = useModal();

	const [applyData, setApplyData] = useRecoilState(userAtom);

	const [isOpen, setIsOpen] = useState(false);

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

	const [modal, setModal] = useState({
		img: 'modal-excl.svg',
		title: '알림',
		content: '',
	});

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
		setIsOpen(isOpen === field ? null : field);
	};

	// 달력 열고 날짜 클릭시 자동 닫기
	const handleSelectDate = date => {
		if (isOpen === 'start') {
			setInputData(prev => ({
				...prev,
				visitStartDate: dateFormat(date),
			}));
			setStartDate(date);
		} else if (isOpen === 'end') {
			setInputData(prev => ({
				...prev,
				visitEndDate: dateFormat(date),
			}));
			setEndDate(date);
		}
		setIsOpen(null);
	};

	// 이전으로 가기 버튼
	const handleClickPrev = () => {
		setNextStep(false);

		setApplyData(prev => ({
			...prev,
			visitStartDate: inputData.visitStartDate,
			visitEndDate: inputData.visitEndDate,
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

		const { id, ...restApplyData } = applyData;

		const updatedData = {
			...restApplyData,
			authorId: id,
			visitStartDate: inputData.visitStartDate,
			visitEndDate: inputData.visitEndDate,
			availableService: inputData.availableService,
			requirement: inputData.requirement,
			status: otherStatus,
		};

		try {
			const formData = new FormData();
			for (const [key, value] of Object.entries(updatedData)) {
				formData.append(
					key,
					value instanceof Object ? JSON.stringify(value) : value,
				);
			}

			await trigger({
				method: 'post',
				path: `/client/${path}s`,
				data: formData,
			});

			const statusContent =
				status === otherStatus
					? '임시 저장되었습니다.'
					: '신청이 완료되었습니다.';

			setModal(prev => ({
				...prev,
				img: 'modal-check.svg',
				content: statusContent,
			}));

			openModal();
		} catch (error) {
			setModal({
				content: '다시 신청해 주세요.',
			});
		}
	};

	const { mainKeyword, subKeywords, hashtags } = applyData;

	return (
		<>
			{modalState && (
				<Modal
					title={modal.title}
					img={modal.img}
					content={modal.content}
					onClose={() => closeModal(onClose())}
				/>
			)}

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
										placeholder="시작일"
										variant="default"
										size="height"
										defaultValue={inputData.visitStartDate || startDate}
										onClick={() => handleOpenCalendar('start')}
										value={inputData.visitStartDate || startDate}
										disabled={disabled}
										ref={startRef}
										readOnly
									/>
									{!disabled && (
										<S.CalendarImg
											src="/assets/icons/calendar.svg"
											onClick={() => handleOpenCalendar('start')}
											$isOpen={isOpen === 'start'}
										/>
									)}
									{isOpen === 'start' && (
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
										placeholder="종료일"
										size="height"
										variant="default"
										defaultValue={endDate}
										onClick={() => handleOpenCalendar('end')}
										value={inputData.visitEndDate || endDate}
										disabled={disabled}
										ref={endRef}
										readOnly
									/>
									{!disabled && (
										<S.CalendarImg
											src="/assets/icons/calendar.svg"
											onClick={() => handleOpenCalendar('end')}
											$isOpen={isOpen === 'end'}
										/>
									)}
									{isOpen === 'end' && (
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
							name="availableService"
							title="제공 서비스"
							placeholder="제공 가능한 서비스를 입력해 주세요."
							value={inputData.availableService}
							onChange={handleChange}
							disabled={disabled}
							ref={serviceRef}
							message={errorMsg.availableService || ' '}
						/>
					</>
				)}

				{/* 홈페이지 제작에만 안 들어가는 거 */}
				{pathname !== LINK.DEVELOP && (
					<>
						<S.InputBox>
							<S.H1>메인 키워드</S.H1>
							<S.WordBox>
								{mainKeyword &&
									mainKeyword.map(main => (
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
						size={pathname === LINK.DEVELOP ? 'web' : 'modal'}
						variant="default"
						name="requirement"
						value={inputData.requirement}
						onChange={handleChange}
						ref={reqRef}
						placeholder="내용을 입력해 주세요."
						disabled={disabled}
					/>
					<p>{errorMsg.requirement}</p>
				</S.InputBox>
			</S.Body>

			<S.ButtonBox disabled={disabled}>
				<div>
					<Button variant="white" size="height" onClick={handleClickPrev}>
						이전
					</Button>
					{!disabled && (
						<Button
							variant="white"
							size="height"
							onClick={() => handleSubmit(true)}
						>
							임시저장
						</Button>
					)}
				</div>
				<Button
					variant="default"
					size="height"
					onClick={disabled ? onClose : handleSubmit}
				>
					{disabled ? '닫기' : '신청'}
				</Button>
			</S.ButtonBox>
		</>
	);
}

export default ApplicationDetails;
