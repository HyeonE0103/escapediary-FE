import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
  isLoading: false,
  error: null,
};

export const __readEscape =
  createAsyncThunk();
  // "ADD_ESCAPE",
  // (payload, thunkAPI) => {}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;
export default userSlice.reducer;
