import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode.js";

const initialState = {
  value: "",
  wordsData: null,
  status: "idle",
  error: "",
};

// export const getWordsFromDictionary = createAsyncThunk(
//   "/word",
//   async (word) => {
//     const data = await fetch(
//       `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
//     );
//     const result = await data.json();
//     // console.log(result);
//     return result;
//   }
// );

export const getWordsFromDictionary = createAsyncThunk(
  "/word",
  async (word, thunkAPI) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      if (!response.ok) {
        // If the response status is not 200-299, reject the promise
        return thunkAPI.rejectWithValue(await response.json());
      }

      const result = await response.json();
      return result;
    } catch (error) {
      // If there is an error in the fetch call, reject the promise
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const searchInputSlice = createSlice({
  name: "searchInput",
  initialState,
  reducers: {
    inputSearch(state, action) {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWordsFromDictionary.fulfilled, (state, action) => {
        // Store the API response in the state
        state.wordsData = action.payload;
        state.status = "succeeded";
      })
      .addCase(getWordsFromDictionary.rejected, (state, action) => {
        // Handle the error
        // state.status = StatusCode.ERROR;
        // state.status = StatusCode.IDLE;
        state.wordsData = action.payload;
        state.status = "failed";
        state.status = action.error.message;
      });
  },
});

export const { inputSearch } = searchInputSlice.actions;

export default searchInputSlice.reducer;
