import { useLayoutEffect, useState } from 'react';

const queryString = '(max-width: 700px)';

export function useIsMobile(): boolean | undefined {
  const [mobile, setMobile] = useState<boolean>(window.matchMedia(queryString).matches);
  useLayoutEffect(() => {
    const query = window.matchMedia(queryString);
    const listener = ({ matches }: MediaQueryListEvent) => setMobile(matches);

    const register = () => query.addEventListener('change', listener);
    const unregister = () => query.removeEventListener('change', listener);

    register();
    setMobile(query.matches);
    return unregister;
  }, []);
  return mobile;
}
