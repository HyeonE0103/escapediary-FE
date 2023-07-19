import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getuserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { getuserData } = userSlice.actions;
export default userSlice.reducer;
