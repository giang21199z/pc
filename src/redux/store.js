import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from 'utils/loading/loading.reducer';
import userReducer from 'pages/administrator/user.reducer';

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    userReducer: userReducer
  }
});
