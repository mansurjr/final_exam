import { configureStore } from "@reduxjs/toolkit";
import bookmark from "./features/bookmarkSlice";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: {
    bookmark,
    userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
