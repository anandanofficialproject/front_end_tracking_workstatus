export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const SignupSuccess = (data) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: data,
  };
};
export const SignupFailure = (data) => {
  return {
    type: SIGNUP_FAILURE,
    payload: data,
  };
};
export const LoginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};
export const LoginFailure = (data) => {
  return {
    type: LOGIN_FAILURE,
    payload: data,
  };
};

