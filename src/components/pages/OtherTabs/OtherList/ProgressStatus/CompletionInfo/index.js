import { useEffect, useState } from 'react';

import usePathname from 'hooks/usePathname';
import useModal from 'hooks/useModal';
import useApi from 'hooks/useApi';

import * as S from './index.styles';

import Input from 'components/@common/Input';
import Textarea from 'components/@common/Textarea';
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
				{resultLinks &&
					resultLinks.map(link => (
						<Input
							key={link.id}
							value={link.url}
							size="height"
							variant="default"
							disabled
						/>
					))}
			</S.TextBox>

			<S.TextBox>
				<S.Status>첨부 파일</S.Status>
				<S.ReadImg>
					{adminFiles &&
						adminFiles.map(file => (
							<S.Img key={file.id}>
								{file.mimetype.includes('image') ? (
									<img src={file.url} />
								) : (
									<video src={file.url} />
								)}
								<S.ImgTitle
									onClick={() => handleOpenModal(file.url, file.mimetype)}
								>
									<p>{file.originalname}</p>
									<img src="/assets/icons/search.svg" />
								</S.ImgTitle>
							</S.Img>
						))}
				</S.ReadImg>
			</S.TextBox>

			<S.TextBox>
				<S.Status>안내 사항</S.Status>
				<Textarea
					value={instruction}
					size="completed"
					variant="default"
					disabled
				/>
			</S.TextBox>
		</>
	);
}

export default CompletionInfo;
