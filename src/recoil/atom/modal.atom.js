import { atom } from 'recoil';

export const modalState = atom({
	key: 'modalState',
	default: {
		isOpen: false,
		title: '',
		content: <></>, // JSX를 사용하려면 React가 필요합니다.
	},
});
