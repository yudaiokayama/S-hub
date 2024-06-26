import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './settingsSlice';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;