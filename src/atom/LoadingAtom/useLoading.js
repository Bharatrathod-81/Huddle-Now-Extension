import { useAtom } from 'jotai';
import { isLoadingAtom } from './atom'; // Import the loading atom

export function useLoading() {
  const [isLoading, setLoading] = useAtom(isLoadingAtom);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  return {
    isLoading,
    startLoading,
    stopLoading,
  };
}
