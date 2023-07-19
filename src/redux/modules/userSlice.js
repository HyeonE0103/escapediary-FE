import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserData: (state, action) => {
      state.userData = action.payload;
    },
    deleteUserData: (state, action) => {
      state.userData = null;
    },
  },
});

export const { getUserData, deleteUserData } = userSlice.actions;
export default userSlice.reducer;
