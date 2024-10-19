import { configureStore } from "@reduxjs/toolkit";

//import slice
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    //các reducer
    user: userReducer,
  },
});
