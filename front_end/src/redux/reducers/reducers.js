import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../action/actionType";

const initialState = {
  inputData: null,
};

export const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        inputData: action.payload,
      };
    case SIGNUP_FAILURE:
      return { ...state, inputData: action.payload };
    default:
      return state;
  }
};
export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, inputData: action.payload };
    case LOGIN_FAILURE:
      return { ...state, inputData: action.payload };
    default:
      return state;
  }
};

