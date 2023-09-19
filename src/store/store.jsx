import { configureStore } from "@reduxjs/toolkit";
import selectFontSlice from "./selectFontSlice.jsx";
import themePickerSlice from "./themePickerSlice.jsx";
import searchInputSlice from "./searchInputSlice.jsx";

const store = configureStore({
  reducer: {
    fontFamily: selectFontSlice,
    themePicker: themePickerSlice,
    searchInput: searchInputSlice,
  },
});

export default store;
