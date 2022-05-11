import axios from "axios";

export const getAllUsers = async () => {
  const response = await axios.get("/api/users");
  return response.data;
};

export const getAllPosts = async () => {
  const response = await axios.get("/api/posts");
  return response.data;
};

export const getUserPosts = async (username) => {
  const response = await axios.get("/api/posts/user/" + username);
  return response.data;
};

export const getSingleUser = async (username) => {
  const response = await axios.get("/api/users/"+ username);
  return response.data;
};
