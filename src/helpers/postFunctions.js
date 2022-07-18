import axios from "axios";

export const likePost = async (arg) => {
  const response = await axios.post(
    "/api/posts/like/" + arg.postId,
    {},
    {
      headers: {
        authorization: arg.token,
      },
    }
  );
  return response.data;
};

export const dislikePost = async (arg) => {
  const response = await axios.post(
    "/api/posts/dislike/" + arg.postId,
    {},
    {
      headers: {
        authorization: arg.token,
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

export const followUser = async (userId, token) => {
  const response = await axios.post(
    "/api/users/follow/" + userId,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return response.data;
};

export const unfollowUser = async (userId, token) => {
  const response = await axios.post(
    "/api/users/unfollow/" + userId,
    {},
    {
      headers: {
        authorization: token,
      },
    }
  );
  return response.data;
};

export const editPost = async (arg) => {
  const response = await axios.post(
    "/api/posts/edit/" + arg.postId,
    { postData: arg.post },
    {
      headers: {
        authorization: arg.token,
      },
    }
  );
  return response.data;
};

export const editUserProfile = async (arg) => {
  const response = await axios.post(
    "/api/users/edit",
    {
      userData: arg.user,
    },
    {
      headers: {
        authorization: arg.token,
      },
    }
  );
  return response.data;
};
