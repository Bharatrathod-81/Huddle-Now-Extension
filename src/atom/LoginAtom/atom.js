import { atom } from 'jotai';

export const localStorageAtom = atom(JSON.parse(localStorage.getItem('userData')) || {});
