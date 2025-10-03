import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types";

const user = {
  id: "",
  f_name: "",
  l_name: "",
  gender: "",
  address: "",
};

const initialState = {
  user,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    addUpdate: (state, payload: PayloadAction<User>) => {
      state.user = payload.payload;
    },
    clear: () => initialState,
  },
});

export default userSlice.reducer;
export const { addUpdate, clear } = userSlice.actions;
