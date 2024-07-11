import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NoteState {
  value: string;
}

const initialState: NoteState = {
  value: '',
};

const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setValue } = noteSlice.actions;
export default noteSlice.reducer;
