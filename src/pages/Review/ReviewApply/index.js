import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import useInput from 'hooks/useInput';
import useModal from 'hooks/useModal';
import decodeJWT from 'utils/token';
import useApi from 'hooks/useApi';
import fileToBase64 from 'utils/fileToBase64';
import LINK from 'constants/link';
import MESSAGE from 'constants/message';
import useSlide from 'hooks/useSlide';

import * as S from './index.styles';

import Title from 'components/@common/Title';
import Input from 'components/@common/Input';
import Textarea from 'components/@common/Textarea';
import Button from 'components/@common/Button';
import Modal from 'components/@common/Modal';
import MediaModal from 'components/@common/MediaModal';

function ReviewApply() {
	const navigate = useNavigate();

	const params = useParams();
	const _id = params._id;

	const { inputData, handleChange } = useInput();
	const { modalState, openModal, closeModal } = useModal();

	const decodedPayload = decodeJWT('accessToken');
	const { sub } = decodedPayload;

	const { result, trigger } = useApi({
		path: _id ? `/client/reviews/${_id}` : `/users/${sub}`,
		shouldFetch: true,
	});

	// 보낼 데이터
	const [reviewPost, setReviewPost] = useState({});
	const [postId, setPostId] = useState(null);
	const categoryRef = useRef(null);
	const titleRef = useRef(null);
	const desRef = useRef(null);

	const { result: positionResult } = useApi({
		path: '/client/global-constants?typeValue=REVIEW_TYPE',
		shouldFetch: true,
	});

	// 에러 메시지
	const [errorMsg, setErrorMsg] = useState({
		category: ' ',
		title: ' ',
		requirement: ' ',
		thumbnail: ' ',
	});

	// 카테고리
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState({
		type: '',
		typeLabel: '',
	});

	// 이미지 및 비디오 상태 관리
	const [fileList, setFileList] = useState([]);
	const [clientFile, setClientFile] = useState([]);
	const [isThumbnail, setIsThumbnail] = useState(null);
	const fileRef = useRef(null);

	// 모달
	const [img, setImg] = useState(null);
	const [modal, setModal] = useState({
		img: 'modal-excl.svg',
		title: '알림',
		content: '',
	});

	useEffect(() => {
		if (result.data) {
			if (result.data.statusLabel && result.data.statusLabel !== '임시저장') {
				setModal(prev => ({
					...prev,
					content: '접근 권한이 없습니다.',
				}));

				openModal();
			}

			setReviewPost(result.data);
			setSelectedCategory({
				type: result.data.type,
				typeLabel: result.data.typeLabel,
			});

			if (result.data.clientFiles) {
				setClientFile(result.data.clientFiles);
				setFileList(result.data.clientFiles);
			}
		}

		if (positionResult.data) {
			setCategories(positionResult.data.globalConstantList);
		}
	}, [result.data, positionResult.data]);

	// 카테고리 버튼 클릭
	const handleClickCategory = (category, typeLabel) => {
		setSelectedCategory(prev => ({
			...prev,
			type: category,
			typeLabel,
		}));
	};

	// 파일 선택
	const handleClickImg = () => {
		fileRef.current.click();
	};

	// 파일 추가
	const handleFileChange = async e => {
		const file = e.target.files;
		const files = Array.from(file);
		const totalSizeLimit = 52428800; // 50MB를 바이트 단위로 변환

		const newFiles = [...file, ...clientFile];

		let imageCount = 0;
		let videoCount = 0;
		let fileSize = 0;
		const allowedImage = 15;
		const allowedVideo = 1;

		for (const file of newFiles) {
			const type = file.type ? file.type : file.mimetype;

			if (type.includes('image')) {
				imageCount++;

				if (imageCount > allowedImage) {
					setModal(prev => ({
						...prev,
						content: `이미지는 최대 ${allowedImage}장까지 업로드할 수 있습니다.`,
					}));
					return openModal();
				}
			}

			if (type.includes('video')) {
				videoCount++;

				if (videoCount > allowedVideo) {
					setModal(prev => ({
						...prev,
						content: `비디오는 최대 ${allowedVideo}개까지 업로드할 수 있습니다.`,
					}));
					return openModal();
				}
			}
			fileSize += file.size;

			if (fileSize > totalSizeLimit) {
				setModal(prev => ({
					...prev,
					content: '파일 사이즈가 너무 큽니다!',
				}));
				return openModal();
			}
		}

		const promises = files.map(file => fileToBase64(file));
		const fileObjs = await Promise.all(promises);

		setFileList(prev => [...prev, ...fileObjs]);
		setClientFile(newFiles);
	};

	// 파일 삭제
	const handleDeleteFile = (url, name) => {
		setFileList(prevList => prevList.filter(file => file.url !== url));
		setClientFile(prev =>
			prev.filter(file => (file.name || file.originalname) !== name),
		);

		if (fileRef.current) fileRef.current.value = ''; // 파일 입력 요소 초기화
	};

	// 썸네일 지정
	const handleClickThumbnail = (idx, name) => {
		setIsThumbnail(idx);
		setFileList(prev =>
			prev.map((file, index) => ({
				...file,
				isThumbnail: index === idx,
			})),
		);
		// 클라이언트 파일 배열에서 이름이 일치하는 파일 객체 찾기
		const matchedFileIndex = clientFile.findIndex(file => file.name === name);

		if (matchedFileIndex !== -1) {
			// 클라이언트 파일 배열에서 해당 파일 객체를 제거하고 배열의 맨 앞으로 추가
			const updatedClientFiles = [
				clientFile[matchedFileIndex], // 해당 파일 객체
				...clientFile.slice(0, matchedFileIndex), // 일치하지 않는 파일 객체들의 앞부분
				...clientFile.slice(matchedFileIndex + 1), // 일치하지 않는 파일 객체들의 뒷부분
			];

			setClientFile(updatedClientFiles);
		}
	};

	// 이미지 및 비디오 확대
	const handleClickImgModal = (url, type) => {
		setImg({ src: url, type });
		openModal();
	};

	// 비디오 여부 확인
	const isVideo = url => {
		const video = url.includes('video');
		return video;
	};

	// 리뷰 등록
	const handleSubmit = async (status, label) => {
		let isValid = true;

		if (!_id) {
			if (!selectedCategory.type) {
				isValid = false;
				setErrorMsg({ category: MESSAGE.REVIEW.CATEGORY });
				categoryRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'center', // 요소를 스크롤의 중앙에 위치
				});
			} else if (!inputData.title || reviewPost.title) {
				isValid = false;
				setErrorMsg({ title: MESSAGE.REVIEW.TITLE });
				titleRef.current.focus();
				titleRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'center', // 요소를 스크롤의 중앙에 위치
				});
			} else if (!inputData.requirement) {
				isValid = false;
				desRef.current.focus();
				desRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'center', // 요소를 스크롤의 중앙에 위치
				});
				setErrorMsg({ requirement: MESSAGE.REVIEW.REQ });
			}
		}

		const hasThumbnail = fileList.some(file => file.isThumbnail);

		if (!hasThumbnail && fileList.length) {
			isValid = false;
			fileRef.current.focus();
			setErrorMsg({ thumbnail: MESSAGE.REVIEW.THUMBNAIL });
		}

		if (!isValid) return;

		const { clientFiles, id, ...restDefaultData } = reviewPost;

		const updatedData = {
			...inputData,
			...restDefaultData,

			authorId: sub,

			title: inputData.title ? inputData.title : reviewPost.title,
			requirement: inputData.requirement
				? inputData.requirement
				: reviewPost.requirement,

			type: selectedCategory.type,
			typeLabel: selectedCategory.typeLabel,

			status,
			statusLabel: label,
		};

		const finalData = _id ? { ...updatedData, id: _id } : { ...updatedData };

		const formData = new FormData();
		for (const [key, value] of Object.entries(finalData)) {
			formData.append(
				key,
				value instanceof Object ? JSON.stringify(value) : value,
			);
		}

		if (clientFile.length > 0) {
			for (const [key, value] of Object.entries(clientFile)) {
				formData.append(
					'clientFiles',
					value instanceof File ? value : JSON.stringify(value),
				);
			}
		}

		const triggerResult = await trigger({
			method: 'post',
			path: '/client/reviews',
			data: formData,
		});

		if (triggerResult?.statusCode === 201) {
			const statusContent =
				status === 'REVIEW_STATUS_01'
					? '리뷰가 임시 저장되었습니다.'
					: '리뷰 신청이 완료되었습니다.';

			setModal({
				img: 'modal-check.svg',
				title: '리뷰 신청',
				content: statusContent,
			});
			setPostId(triggerResult.data.id);
			openModal();
		}
	};

	// 리뷰 취소
	const handleCancel = () => {
		navigate(-1);
	};

	const mediaRef = useRef([]);
	const containerRef = useRef(null);

	const { handlePrevClick, handleNextClick, slide, visibleItemsCount } =
		useSlide(mediaRef, containerRef, fileList);

	// mainKeyword,	subKeywords, hashtags,
	const { title, requirement, smartplaceLink } = reviewPost;

	return (
		<S.Body>
			{modalState && !img && (
				<Modal
					img={modal.img}
					title={modal.title}
					content={modal.content}
					onClose={() =>
						closeModal(navigate(postId ? LINK.REVIEW_POST + `/${postId}` : -1))
					}
				/>
			)}

			{modalState && img && (
				<MediaModal
					src={img.src}
					type={img.type}
					onClose={() => {
						closeModal();
						setImg(null);
					}}
				/>
			)}

			<Title title="REVIEW">
				자사 영업일 기준, 하루 한 번 신청 가능합니다.
			</Title>

			<S.Content>
				<S.Box>
					<S.Title>리뷰 카테고리</S.Title>
					<S.CategoryBox ref={categoryRef}>
						{categories &&
							categories.map(category => (
								<S.Category
									key={category.id}
									onClick={() =>
										handleClickCategory(category.codeValue, category.typeLabel)
									}
									$clicked={selectedCategory.type === category.codeValue}
								>
									{category.codeLabel}
								</S.Category>
							))}
					</S.CategoryBox>
					<p>{errorMsg.category || ' '}</p>
				</S.Box>

				<S.Box>
					<S.Title>리뷰 제목</S.Title>
					<Input
						name="title"
						defaultValue={title || inputData.title}
						placeholder="제목을 입력해 주세요."
						maxLength="80"
						onChange={e => handleChange(e)}
						ref={titleRef}
						size="height"
						variant="default"
					/>
					<p>{errorMsg.title || ' '}</p>
				</S.Box>

				<S.Box>
					<S.Title>요청사항 및 내용</S.Title>
					<Textarea
						name="requirement"
						defaultValue={requirement || inputData.requirement}
						placeholder="요청사항 및 내용을 입력해 주세요."
						maxLength="20000"
						onChange={e => handleChange(e)}
						ref={desRef}
						size="default"
						variant="default"
					/>
					<p>{errorMsg.requirement || ' '}</p>
				</S.Box>

				{/* <S.Box>
					<S.Title>메인 키워드</S.Title>
					<S.WordBox>
						{mainKeyword &&
							mainKeyword.map(tag => <S.Word key={tag.id}>{tag.name}</S.Word>)}
					</S.WordBox>
					<p />
				</S.Box>

				<S.Box>
					<S.Title>서브 키워드</S.Title>
					<S.WordBox>
						{subKeywords &&
							subKeywords.map(tag => <S.Word key={tag.id}>{tag.name}</S.Word>)}
					</S.WordBox>
					<p />
				</S.Box>

				<S.Box>
					<S.Title>해시태그</S.Title>
					<S.WordBox>
						{hashtags &&
							hashtags.map(tag => <S.Word key={tag.id}>{tag.name}</S.Word>)}
					</S.WordBox>
					<p />
				</S.Box> */}

				<S.Box>
					<S.Title>스마트 플레이스 링크</S.Title>
					<Input
						value={smartplaceLink || ''}
						placeholder="등록된 스마트 플레이스 링크가 없습니다."
						size="height"
						variant="default"
						readOnly
						disabled
					/>
					<p />
				</S.Box>

				{/* 업로드 파일 */}
				<S.Box>
					<S.Title>업로드 파일</S.Title>

					<S.FileBox>
						<span>
							파일은 최대 50MB까지 업로드 가능합니다.
							<br />
							영상은 최대 1개, 이미지는 최대 15장까지 업로드 가능합니다.
						</span>

						<p>{errorMsg.thumbnail || ' '}</p>

						<S.MediaFileBox>
							<S.FileContainer>
								<S.CustomButton onClick={() => handleClickImg()}>
									<img src="/assets/icons/camera.svg" />
								</S.CustomButton>
								<S.HiddenFileInput
									id="hiddenFileInput"
									type="file"
									accept="video/*, image/*"
									onChange={e => handleFileChange(e)}
									ref={fileRef}
									multiple
									readOnly
								/>
								<S.MediaTitle onClick={() => handleClickImg()}>
									<p>파일 선택</p>
								</S.MediaTitle>
							</S.FileContainer>

							{slide > 0 && slide !== fileList?.length - 1 && (
								<S.LeftArrowImg onClick={handlePrevClick} />
							)}
							<S.MediaList ref={containerRef}>
								{fileList &&
									fileList.map((file, idx) => (
										<S.Media key={idx} ref={el => (mediaRef.current[idx] = el)}>
											{isThumbnail === idx && (
												<S.Thumbnail>
													<img src="/assets/icons/thumbnail-check.svg" />
													<span>썸네일</span>
												</S.Thumbnail>
											)}

											{isVideo(file.url) ? (
												<S.Video
													src={file.url}
													$thumbnail={isThumbnail === idx}
													onClick={() =>
														handleClickThumbnail(idx, file.originalname)
													}
												/>
											) : (
												<S.Img
													src={file.url}
													$thumbnail={isThumbnail === idx}
													onClick={() =>
														handleClickThumbnail(idx, file.originalname)
													}
												/>
											)}

											<S.XBtn
												src="/assets/icons/x-shadow.png"
												onClick={() =>
													handleDeleteFile(file.url, file.originalname)
												}
											/>
											<S.MediaTitle
												onClick={() => handleClickImgModal(file.url, file.type)}
											>
												<p>{file.originalname}</p>
												<img src="/assets/icons/search.svg" />
											</S.MediaTitle>
										</S.Media>
									))}
							</S.MediaList>
							{slide + visibleItemsCount < fileList?.length && (
								<S.RightArrowImg onClick={handleNextClick} />
							)}
						</S.MediaFileBox>
					</S.FileBox>
				</S.Box>
			</S.Content>

			<S.ButtonBox>
				<S.Check>스마트 플레이스 링크 수정은 관리자에게 문의해 주세요.</S.Check>

				<div>
					<div>
						<Button size="height" variant="white" onClick={handleCancel}>
							취소
						</Button>
						<Button
							size="height"
							variant="white"
							onClick={() => handleSubmit('REVIEW_STATUS_01', '임시저장')}
						>
							임시 저장
						</Button>
					</div>

					<Button
						size="height"
						variant="default"
						onClick={() => handleSubmit('REVIEW_STATUS_02', '대기')}
					>
						리뷰 등록 완료
					</Button>
				</div>
			</S.ButtonBox>
		</S.Body>
	);
}

export default ReviewApply;
