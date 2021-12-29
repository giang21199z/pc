import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isShow: false
}

export const loadingReducer = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    show: (state) => {
      state.isShow = true;
    },
    hide: (state) => {
      state.isShow = false;
    }
  },
});

export const { show, hide } = loadingReducer.actions;

export default loadingReducer.reducer;
