import { createSlice } from "@reduxjs/toolkit";
import { getSingleUser } from "../helpers/getFunctions";
import { followUser, unfollowUser } from "../helpers/postFunctions";
import { toast } from "react-toastify";
import { authActions } from "./auth-slice";

const initialState = { profile: {} };

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    update(state, action) {
      state.profile = action.payload;
    },
  },
});

export const getProfileDetails = (username) => {
  return async (dispatch) => {
    try {
      const data = await getSingleUser(username);
      dispatch(profileActions.update(data.user));
    } catch (err) {
      console.log(err);
    }
  };
};

export const followUsers = (userId, token) => {
  return async (dispatch) => {
    try {
      const data = await followUser(userId, token);
      console.log(data);
      dispatch(profileActions.update(data.followUser));
      dispatch(authActions.update(data.user));
      toast.success("User followed", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
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

export const unfollowUsers = (userId, token) => {
  return async (dispatch) => {
    try {
      const data = await unfollowUser(userId, token);
      dispatch(profileActions.update(data.followUser));
      dispatch(authActions.update(data.user));
      toast.success("User unfollowed", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
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

export const profileActions = profileSlice.actions;
