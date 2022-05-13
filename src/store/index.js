import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./theme-slice";
import { authSlice } from "./auth-slice";
import { postSlice } from "./post-slice";
import { profileSlice } from "./profile-slice";
import { modalSlice } from "./modal-slice";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    auth: authSlice.reducer,
    posts: postSlice.reducer,
    profile: profileSlice.reducer,
    modal: modalSlice.reducer,
  },
});
