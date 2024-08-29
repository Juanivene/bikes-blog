'use client';

import { ReactNode } from 'react';

import { Provider } from 'react-redux';

import { store } from '@/redux/store/store';

const ReduxProvider = ({ children }: { children: ReactNode }): JSX.Element => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
