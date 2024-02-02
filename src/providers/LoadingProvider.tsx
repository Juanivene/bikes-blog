'use client';

import { useAppSelector } from '@/redux/hooks/hook';

import LoadingBackdrop from '@/components/Loading/LoadingBackdrop';

const LoadingProvider = (): JSX.Element => {
  const { loading } = useAppSelector((state) => state.loading);

  return <LoadingBackdrop open={loading} />;
};
export default LoadingProvider;
