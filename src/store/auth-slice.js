import { createSlice } from "@reduxjs/toolkit";
import { loginAPICall, signUpAPICall } from "../helpers/authFunctions";
import { toast } from "react-toastify";

const initialState = { isLoggedIn: false, token: "", userData: {} };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.userData = action.payload.user;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = "";
      state.userData = {};
    },
  },
});

export const loginUser = (loginInputState) => {
  return async (dispatch) => {
    try {
      const data = await loginAPICall(loginInputState);
      dispatch(
        authActions.login({ token: data.encodedToken, user: data.foundUser })
      );
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.errors[0], {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };
};

export const signUpUser = (signUpInputState) => {
  return async (dispatch) => {
    try {
      const data = await signUpAPICall(signUpInputState);
      dispatch(
        authActions.login({ token: data.encodedToken, user: data.createdUser })
      );
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.errors[0], {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };
};

export const authActions = authSlice.actions;
