import { createSlice } from "@reduxjs/toolkit";
import { getSingleUser } from "../helpers/getFunctions";

const initialState = { profile: {} };

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    update(state, action) {
      console.log(action.payload);
      state.profile = action.payload;
    },
  },
});

export const getProfileDetails = (username) => {
  return async (dispatch) => {
    try {
      const data = await getSingleUser(username);
      console.log(data);
      console.log("Here");
      dispatch(profileActions.update(data.user));
    } catch (err) {
      console.log(err);
    }
  };
};

export const profileActions = profileSlice.actions;
