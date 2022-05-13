import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../helpers/getFunctions";
import { toast } from "react-toastify";
import { bookmarkPost, dislikePost, likePost, removeBookmarkPost } from "../helpers/postFunctions";
import { authActions } from "./auth-slice";

const initialState = { allPosts: [] };

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    updateAllPosts(state, action) {
      state.allPosts = action.payload;
    },
  },
});

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const data = await getAllPosts();
      dispatch(postActions.updateAllPosts(data.posts));
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

export const likePosts = (postId, token) => {
  return async (dispatch) => {
    try {
      const data = await likePost(postId, token);
      dispatch(postActions.updateAllPosts(data.posts));
      toast.success("Post Liked!", {
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

export const dislikePosts = (postId, token) => {
  return async (dispatch) => {
    try {
      const data = await dislikePost(postId, token);
      dispatch(postActions.updateAllPosts(data.posts));
      toast.success("Like removed!", {
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

export const removeBookmarkPosts = (postId, token) => {
  return async (dispatch) => {
    try {
      const data = await removeBookmarkPost(postId, token);
      dispatch(authActions.bookmark(data.bookmarks));
      toast.success("Bookmark removed!", {
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

export const bookmarkPosts = (postId, token) => {
  return async (dispatch) => {
    try {
      const data = await bookmarkPost(postId, token);
      dispatch(authActions.bookmark(data.bookmarks));
      toast.success("Bookmark Added!", {
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

export const postActions = postSlice.actions;
