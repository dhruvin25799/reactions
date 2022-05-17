import axios from "axios";

export const likePost = async (postId, token) => {
  const response = await axios.post(
    "/api/posts/like/" + postId,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return response.data;
};

export const dislikePost = async (postId, token) => {
  const response = await axios.post(
    "/api/posts/dislike/" + postId,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return response.data;
};

export const postPost = async (post, token) => {
  const response = await axios.post(
    "/api/posts",
    { postData: post },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return response.data;
};

export const bookmarkPost = async (postId, token) => {
  const response = await axios.post(
    "/api/users/bookmark/" + postId,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return response.data;
};

export const removeBookmarkPost = async (postId, token) => {
  const response = await axios.post(
    "/api/users/remove-bookmark/" + postId,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return response.data;
};

export const addComment = async (postId, token, comment) => {
  const response = await axios.post(
    "/api/comments/add/" + postId,
    {
      commentData: { text: comment },
    },
    {
      headers: {
        authorization: token,
      },
    }
  );
  return response.data;
};
