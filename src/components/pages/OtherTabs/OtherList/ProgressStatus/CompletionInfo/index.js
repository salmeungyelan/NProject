import { useEffect, useRef, useState } from 'react';

import usePathname from 'hooks/usePathname';
import useModal from 'hooks/useModal';
import useApi from 'hooks/useApi';
import useSlide from 'hooks/useSlide';

import * as S from './index.styles';

import MediaModal from 'components/@common/MediaModal';

function CompletionInfo({ id }) {
	const { path } = usePathname();
	const { modalState, openModal, closeModal } = useModal();

	const [completedData, setCompletedData] = useState({});

	const [file, setFile] = useState({
		url: '',
		type: '',
	});

	const { result } = useApi({
		path: `/client/${path}s/${id}`,
		shouldFetch: true,
	});

	useEffect(() => {
		if (result.data) {
			setCompletedData(result.data);
		}
	}, [result.data]);

	const handleOpenModal = (url, type) => {
		setFile({ url, type });
		openModal();
	};

	const { resultLinks, adminFiles, instruction } = completedData;

	const mediaRef = useRef([]);
	const containerRef = useRef(null);

	const { handlePrevClick, handleNextClick, slide, visibleItemsCount } =
		useSlide(mediaRef, containerRef, !adminFiles);

	return (
		<>
			{modalState && (
				<MediaModal
					src={file.url}
					type={file.type}
					onClose={() => closeModal()}
				/>
			)}

			<S.TextBox>
				<S.Status>링크</S.Status>
				<S.ReadOnly>{resultLinks?.url || '등록된 링크가 없습니다.'}</S.ReadOnly>
			</S.TextBox>

			<S.TextBox>
				{slide > 0 && slide !== adminFiles?.length - 1 && (
					<S.LeftArrowImg onClick={handlePrevClick} />
				)}

				<S.Status>첨부 파일</S.Status>
				<S.ReadImg $adminFiles={adminFiles?.length}>
					<div ref={containerRef}>
						{adminFiles?.length ? (
							adminFiles.map((file, index) => (
								<S.Img key={file.id} ref={el => (mediaRef.current[index] = el)}>
									<img src={file.url} />
									<S.ImgTitle
										onClick={() => handleOpenModal(file.url, file.mimetype)}
									>
										<p>{file.originalname || 'img'}</p>
										<img src="/assets/icons/search.svg" />
									</S.ImgTitle>
								</S.Img>
							))
						) : (
							<p>등록된 첨부 파일이 존재하지 않습니다.</p>
						)}
					</div>
				</S.ReadImg>

				{visibleItemsCount < adminFiles?.length + 1 && (
					<S.RightArrowImg onClick={handleNextClick} />
				)}
			</S.TextBox>

			<S.TextBox>
				<S.Status>안내 사항</S.Status>

				<S.ReadOnly>
					{instruction?.comment || '안내 사항이 없습니다.'}
				</S.ReadOnly>
			</S.TextBox>
		</>
	);
}

export default CompletionInfo;
