import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from 'utils/loading/loading.reducer';

export const store = configureStore({
  reducer: {
    loading: loadingReducer
  }
});