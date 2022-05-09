import axios from "axios";
export const loginAPICall = async (loginInputState) => {
  const response = await axios.post("/api/auth/login", {
    username: loginInputState.email,
    password: loginInputState.password,
  });
  return response.data;
};

export const signUpAPICall = async (signUpInputState) => {
  const response = await axios.post("/api/auth/signup", {
    username: signUpInputState.email,
    password: signUpInputState.password,
    fistName: signUpInputState.fistName,
    lastName: signUpInputState.lastName,
  });
  return response.data;
};
