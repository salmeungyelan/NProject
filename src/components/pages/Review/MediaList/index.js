import { useRef, useState } from 'react';

import useModal from 'hooks/useModal';

import * as S from './index.styles';

import MediaModal from 'components/@common/MediaModal';
import useSlide from 'hooks/useSlide';

function MediaList({ clientFiles }) {
	const { modalState, openModal, closeModal } = useModal();

	const [file, setFile] = useState({ url: '', type: '' });

	const handleOpenModal = (url, type) => {
		setFile({ url, type });
		openModal();
	};

	const mediaRef = useRef([]);
	const containerRef = useRef(null);

	const { handlePrevClick, handleNextClick, slide, visibleItemsCount } =
		useSlide(mediaRef, containerRef, clientFiles);

	return (
		<>
			{modalState && (
				<MediaModal
					src={file.url}
					type={file.type}
					onClose={() => closeModal()}
				/>
			)}
			<S.Background>
				{slide > 0 && slide !== clientFiles?.length - 1 && (
					<S.LeftArrowImg onClick={handlePrevClick} />
				)}

				<S.MediaList ref={containerRef}>
					{clientFiles &&
						clientFiles.map((file, index) => (
							<S.Media key={file.id} ref={el => (mediaRef.current[index] = el)}>
								{file.isThumbnail && (
									<S.Thumbnail>
										<img src="/assets/icons/thumbnail-check.svg" />
										<span>썸네일</span>
									</S.Thumbnail>
								)}

								{file.mimetype.includes('video') && <video src={file.url} />}
								{!file.mimetype.includes('video') && <img src={file.url} />}

								<S.MediaTitle
									onClick={() => handleOpenModal(file.url, file.mimetype)}
								>
									<p>{file.originalname}</p>
									<img src="/assets/icons/search.svg" />
								</S.MediaTitle>
							</S.Media>
						))}
				</S.MediaList>

				{slide + visibleItemsCount < clientFiles?.length && (
					<S.RightArrowImg onClick={handleNextClick} />
				)}
			</S.Background>
		</>
	);
}

export default MediaList;

// const [slide, setSlide] = useState(0);
// const [visibleItemsCount, setVisibleItemsCount] = useState(0);

// useEffect(() => {
// 	if (containerRef.current) {
// 		const containerWidth = containerRef.current.offsetWidth;
// 		const itemWidth = mediaRef.current[0]?.offsetWidth || 0;
// 		const count = Math.floor(containerWidth / itemWidth);
// 		setVisibleItemsCount(count);
// 		setSlide(0); // 첫 시작 시 슬라이드를 처음으로 설정
// 	}
// }, [clientFiles]);

// const handlePrevClick = () => {
// 	const boundaryLeft = containerRef.current.getBoundingClientRect().left;

// 	const target = [...mediaRef.current].map(
// 		v => v.getBoundingClientRect().left,
// 	);
// 	const num = target.reverse().findIndex(left => left < boundaryLeft); // 왼쪽으로 가야 하므로 역순으로 탐색합니다.

// 	if (num !== -1) {
// 		containerRef.current.scrollTo({
// 			left: containerRef.current.scrollLeft - (boundaryLeft - target[num]), // 왼쪽으로 이동
// 			behavior: 'smooth',
// 		});

// 		setSlide(prev => Math.max(0, prev - 1)); // 슬라이드 상태 업데이트
// 	}
// };

// const handleNextClick = () => {
// 	const boundaryRight = containerRef.current.getBoundingClientRect().right;

// 	const target = [...mediaRef.current].map(
// 		v => v.getBoundingClientRect().right,
// 	);
// 	const num = target.findIndex(right => right >= boundaryRight);

// 	if (target[num] === boundaryRight) {
// 		containerRef.current.scrollTo({
// 			left: containerRef.current.scrollLeft + target[num + 1] - target[num],
// 			behavior: 'smooth',
// 		});
// 	} else
// 		containerRef.current.scrollTo({
// 			left: target[num] - boundaryRight,
// 			behavior: 'smooth',
// 		});

// 	setSlide(prev => Math.min(prev + 1)); // 슬라이드 상태 업데이트
// };
