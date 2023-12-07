import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../modules/Auth';

const store = configureStore({
  reducer: {
    AuthSlice
  }
});

export default store;

