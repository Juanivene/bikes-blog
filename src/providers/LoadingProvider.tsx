'use client';

import { LoadingBackdrop } from 'puas-components';

import { useAppSelector } from '../store/hook';

const LoadingProvider = (): JSX.Element => {
  const { loading } = useAppSelector((state) => state.loading);

  return <LoadingBackdrop open={loading} />;
};
export default LoadingProvider;
