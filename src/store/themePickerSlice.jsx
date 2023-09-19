import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "dark",
};

export const themePickerSlice = createSlice({
  name: "themePicker",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === "dark" ? "light" : "dark";
    },
  },
});

export const { toggleTheme } = themePickerSlice.actions;

export default themePickerSlice.reducer;
