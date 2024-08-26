import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '@/redux/store/store';

/**
 * Custom hook to use the `dispatch` function from the Redux store.
 *
 * @returns {AppDispatch} The dispatch function from the Redux store.
 */
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

/**
 * Custom hook to use the `selector` function from the Redux store.
 *
 * @template T The type of the state returned by the selector.
 * @returns {TypedUseSelectorHook<RootState>} The selector function from the Redux store, typed with `RootState`.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
