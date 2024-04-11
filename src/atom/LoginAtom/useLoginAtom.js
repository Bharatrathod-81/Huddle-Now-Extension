import { useAtom } from 'jotai';
import { localStorageAtom } from './LoginAtom'; //this is where your atom is defined

export function useLocalStorageAtom() {
  
  return useAtom(localStorageAtom);
}
