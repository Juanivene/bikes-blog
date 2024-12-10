'use client';

import { useLoadingStore } from '@/zustand/store';

import LoadingBackdrop from '@/components/Loading/LoadingBackdrop';

const LoadingProvider = (): React.ReactElement => {
  const { isLoading } = useLoadingStore();
  return <LoadingBackdrop open={isLoading} />;
};
export default LoadingProvider;
