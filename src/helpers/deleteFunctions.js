import axios from "axios";

export const deletePost = async (arg) => {
  const response = await axios.delete("/api/posts/" + arg.postId, {
    headers: {
      authorization: arg.token,
    },
  });
  return response.data;
};
