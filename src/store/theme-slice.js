import { createSlice } from "@reduxjs/toolkit";

const initialState = { isDark: false };

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle(state) {
      state.isDark = !state.isDark;
    },
  },
});

export const themeActions = themeSlice.actions;
