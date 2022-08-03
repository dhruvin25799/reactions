export const loginInputReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL": {
      return { ...state, email: action.payload };
    }
    case "PASSWORD": {
      return { ...state, password: action.payload };
    }
    case "DUMMY": {
      return { ...state, email: "test.user@gmail.com", password: "1234567890" };
    }
    default:
      return state;
  }
};

export const initialLoginInputState = {
  email: "",
  password: "",
};
