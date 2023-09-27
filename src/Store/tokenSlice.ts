

import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: null, // Initial state for the token is null
  reducers: {
    setToken: (state, action) => {
      
      return action.payload;
    },
   
  },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
