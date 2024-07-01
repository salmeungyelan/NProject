import { useState } from 'react';

import useModal from 'hooks/useModal';

import * as S from './index.styles';

import MediaModal from 'components/@common/MediaModal';

function FileList({ clientFiles }) {
	const { modalState, openModal, closeModal } = useModal();

	const [file, setFile] = useState({
		url: '',
		type: '',
	});

	const handleOpenModal = (url, type) => {
		setFile({ url, type });
		openModal();
	};

	return (
		<S.MediaList>
			{modalState && (
				<MediaModal
					src={file.url}
					type={file.type}
					onClose={() => closeModal()}
				/>
			)}

			{clientFiles &&
				clientFiles.map(file => (
					<S.Media key={file.id}>
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
	);
}

export default FileList;
