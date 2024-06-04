import { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from 'recoil/atom/modal.atom';

const useModal = () => {
	const [modalDataState, setModalDataState] = useRecoilState(modalState);

	useEffect(() => {
		if (modalDataState.isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [modalDataState.isOpen]);

	const closeModal = useCallback(
		() => setModalDataState(prev => ({ ...prev, isOpen: false })),
		[setModalDataState],
	);

	const openModal = useCallback(
		({ img, title, content, callback }) =>
			setModalDataState({
				isOpen: true,
				img,
				title,
				content,
				callBack: callback,
			}),
		[setModalDataState],
	);

	return { modalDataState, closeModal, openModal };
};

export default useModal;
