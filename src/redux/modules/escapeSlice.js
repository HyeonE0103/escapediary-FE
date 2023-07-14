import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const __readEscape = createAsyncThunk(
  "ADD_ESCAPE",
  (payload, thunkAPI) => {}
);

const escapeSlice = createSlice({
  name: "escape",
  initialState,
  reducers: {},
});

export const {} = escapeSlice.actions;
export default escapeSlice.reducer;
