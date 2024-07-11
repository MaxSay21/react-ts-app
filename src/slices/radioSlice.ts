import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RadioState {
  value: string;
}

const initialState: RadioState = {
  value: 'Option A',
};

const radioSlice = createSlice({
  name: 'radio',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setValue } = radioSlice.actions;
export default radioSlice.reducer;
