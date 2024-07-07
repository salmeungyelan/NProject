import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const otherTabsState = atom({
	key: 'otherTabs',
	default: {},
	effects_UNSTABLE: [persistAtom],
});
