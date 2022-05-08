import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false, token: "" };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

export const authActions = authSlice.actions;
