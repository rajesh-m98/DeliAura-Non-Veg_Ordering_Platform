// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itemCount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementItemCount: (state) => {
      state.itemCount += 1;
    },
  },
});

export const { incrementItemCount } = cartSlice.actions;

export default cartSlice.reducer;