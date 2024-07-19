import { useState } from 'react';

const useModal = () => {
	const [modalState, setModalState] = useState(false);

	const openModal = () => {
		document.body.style.overflow = 'hidden';
		setModalState(true);
	};

	const closeModal = () => {
		document.body.style.overflow = 'auto';
		setModalState(false);
	};

	return { modalState, openModal, closeModal };
};

export default useModal;
