// atoms.js
import { atom } from 'jotai';

export const localStorageAtom = atom(
  () => JSON.parse(localStorage.getItem('userData')) || { },
  (get, set, newValue) => {
    localStorage.setItem('userData', JSON.stringify(newValue));
    set(newValue);
  }
);
