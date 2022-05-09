export const signUpInputReducer = (state, action) => {
  switch (action.type) {
    case "FNAME": {
      return { ...state, firstName: action.payload };
    }
    case "LNAME": {
      return { ...state, lastName: action.payload };
    }
    case "EMAIL": {
      return { ...state, email: action.payload };
    }
    case "PASSWORD": {
      return { ...state, password: action.payload };
    }
    default:
      return state;
  }
};

export const initialSignUpState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
