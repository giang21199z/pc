import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [
    {id: 1, name: 'Nguyen Dinh Giang'},
  ]
}

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    }
  },
});

export const { setData } = userReducer.actions;

export default userReducer.reducer;
