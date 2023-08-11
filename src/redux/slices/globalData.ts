import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const globalDataSlice = createSlice({
  name: 'globalData',
  initialState,
  reducers: {},
});

// export const {} = globalDataSlice.actions;

export default globalDataSlice.reducer;
