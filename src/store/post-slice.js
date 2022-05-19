import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../helpers/getFunctions";
import { toast } from "react-toastify";
import {
  addComment,
  bookmarkPost,
  dislikePost,
  likePost,
  removeBookmarkPost,
} from "../helpers/postFunctions";
import { authActions } from "./auth-slice";

const initialState = { allPosts: [], status: "idle" };
export const getAllPostsThunk = createAsyncThunk(
  "/posts/getPosts",
  getAllPosts
);
export const likePostsThunk = createAsyncThunk("/posts/likePost", (arg) =>
  likePost(arg)
);

export const dislikePostsThunk = createAsyncThunk("/posts/dislike", (arg) =>
  dislikePost(arg)
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    updateAllPosts(state, action) {
      state.allPosts = action.payload.reverse();
    },
    updateComments(state, action) {
      state.allPosts.find(
        (post) => post._id === action.payload.postId
      ).comments = action.payload.comments.reverse();
    },
  },
  extraReducers: {
    [getAllPostsThunk.pending]: (state) => {
      state.status = "loading";
    },
    [getAllPostsThunk.fulfilled]: (state, action) => {
      state.status = "success";
      state.allPosts = action.payload.posts;
    },
    [getAllPostsThunk.rejected]: (state) => {
      state.status = "failed";
    },
    [likePostsThunk.fulfilled]: (state, action) => {
      state.allPosts = action.payload.posts;
    },
    [dislikePostsThunk.fulfilled]: (state, action) => {
      state.allPosts = action.payload.posts;
    },
  },
});

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

export const postComment = (postId, token, comment) => {
  return async (dispatch) => {
    try {
      const data = await addComment(postId, token, comment);
      dispatch(postActions.updateComments({ postId, comments: data.comments }));
      toast.success("Comment Added!", {
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
