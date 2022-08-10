import { configureStore } from '@reduxjs/toolkit';
import { horseStatusReducer } from './horseStatusSlice';

export const store = configureStore({
  reducer: {
    horseStatus: horseStatusReducer,
  },
});
