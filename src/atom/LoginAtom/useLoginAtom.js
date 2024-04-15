import { atom, useAtom } from 'jotai';
import { localStorageAtom } from './atom';

// Initialize the atom with the token value from localStorage or null if not present
export const tokenAtom = atom(JSON.parse(localStorage.getItem('userData')) || {});

export function useLocalData() {
    const [getLocalData, setLocalData] = useAtom(localStorageAtom);
    return {getLocalData};
}

// Update the token value in both the atom and localStorage
export const setToken = (newValue) => {
  localStorage.setItem('userData', JSON.stringify(newValue));
  // tokenAtom?.update(() => newValue);
};
