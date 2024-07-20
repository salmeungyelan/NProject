import { useEffect, useRef, useState } from 'react';

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

				{visibleItemsCount < clientFiles?.length + 1 && (
					<S.RightArrowImg onClick={handleNextClick} />
				)}
			</S.Background>
		</>
	);
}

export default MediaList;
