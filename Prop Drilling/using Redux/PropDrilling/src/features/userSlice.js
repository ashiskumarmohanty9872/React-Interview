// src/features/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "John Doe",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
