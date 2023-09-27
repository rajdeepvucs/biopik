

import { configureStore } from '@reduxjs/toolkit';
import tokenSlice from './tokenSlice'; 
import authSlice from './auth';

const store = configureStore({
  reducer: {
    auth:authSlice,
    
    token: tokenSlice, 
  },
});

export default store;


