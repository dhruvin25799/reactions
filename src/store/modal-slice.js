import { createSlice } from "@reduxjs/toolkit";
import { postPost } from "../helpers/postFunctions";
import { postActions } from "../store/post-slice";
import { toast } from "react-toastify";

const initialState = { showModal: false, loading: false };

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggle(state) {
      state.showModal = !state.showModal;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const sendPost = (postData, token) => {
  return async (dispatch) => {
    try {
      dispatch(modalActions.setLoading("sending"));
      const data = await postPost(postData, token);
      dispatch(postActions.updateAllPosts(data.posts));
      dispatch(modalActions.setLoading(false));
      dispatch(modalActions.toggle());
      toast.success("Your post is now online!", {
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
      dispatch(modalActions.setLoading(false));
      dispatch(modalActions.toggle());
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

export const modalActions = modalSlice.actions;
