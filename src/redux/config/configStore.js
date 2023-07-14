import { configureStore } from "@reduxjs/toolkit";
import escape from "../modules/escapeSlice";

const store = configureStore({
  reducer: { escape },
});
export default store;
