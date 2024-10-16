
import { atom } from 'recoil';

export const countAtom = atom({
    key: "counterKey",
    default: 0,
})