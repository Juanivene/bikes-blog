import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loadingBackdropOpened: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoadingBackdropOpened: (state, action) => {
      state.loadingBackdropOpened = action.payload;
    },
  },
});

export const { setLoadingBackdropOpened } = loadingSlice.actions;

export default loadingSlice.reducer;
