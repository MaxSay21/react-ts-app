import { configureStore } from '@reduxjs/toolkit';
import radioReducer from './slices/radioSlice';
import noteReducer from './slices/noteSlice';

export const store = configureStore({
  reducer: {
    radio: radioReducer,
    note: noteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
