import {configureStore} from "@reduxjs/toolkit";
import { themeSlice } from "./theme-slice";
import { authSlice } from "./auth-slice";

export const store = configureStore({
    reducer: {theme: themeSlice.reducer, auth: authSlice.reducer}
})
