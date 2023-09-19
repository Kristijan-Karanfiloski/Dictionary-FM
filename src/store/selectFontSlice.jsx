import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  font: "sans-serif",
};

const selectFontSlice = createSlice({
  name: "font",
  initialState,
  reducers: {
    selectFont(state, action) {
      state.font = action.payload;
    },
  },
});

export const { selectFont } = selectFontSlice.actions;

export default selectFontSlice.reducer;
