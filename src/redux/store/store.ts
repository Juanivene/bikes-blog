import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';

import authSlice from '@/redux/slices/auth';
import globalDataSlice from '@/redux/slices/globalData';
import loadingSlice from '@/redux/slices/loading';
import paginationSlice from '@/redux/slices/pagination';

const rootReducer = combineReducers({
  globalData: globalDataSlice,
  loading: loadingSlice,
  pagination: paginationSlice,
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([]), // add middleware WITHOUT []
  devTools: process.env.MODE === 'development',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
