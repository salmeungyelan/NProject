import { atom } from 'recoil';

// Footer Show State
export const includeFooterState = atom({
	key: 'includeFooterState',
	default: true,
});

// Header Show State
export const includeHeaderState = atom({
	key: 'includeHeaderState',
	default: true,
});
