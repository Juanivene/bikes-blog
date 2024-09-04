'use client';

import { useEffect, useState } from 'react';

const useHydrate = (): boolean => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
};

export default useHydrate;
