import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../helpers/getFunctions";
import { toast } from "react-toastify";

const initialState = {allPosts: []};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    uodateAllPosts(state, action) {
      state.allPosts = action.payload;
    },
  },
});

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const data = await getAllPosts();
      dispatch(postActions.uodateAllPosts(data.posts));
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

export const postActions = postSlice.actions;
