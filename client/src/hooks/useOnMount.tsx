import { useEffect, useRef, useState } from 'react';

export const useOnMount = (effect: () => Promise<void> | void) => {
  const didMount = useRef(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      effect();
      setReady(true);
    }
  }, [effect]);

  return ready;
};
