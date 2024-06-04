import { atom } from 'recoil';

export const includeFooterState = atom({
	key: 'includeFooterState',
	default: true,
});

export const includeHeaderState = atom({
	key: 'includeHeaderState',
	default: true,
});
