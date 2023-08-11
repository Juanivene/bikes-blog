import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entries: 5,
  page: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setEntries: (state, action) => {
      state.entries = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setEntries, setPage } = paginationSlice.actions;

export default paginationSlice.reducer;
