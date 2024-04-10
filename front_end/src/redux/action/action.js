import axios from "axios";
import {
  SignupSuccess,
  SignupFailure,
  LoginSuccess,
  LoginFailure,
} from "./actionType";
const apiUrl = process.env.REACT_APP_API_URL;
// console.log(apiUrl);

export const SignupUser = (userData) => {
  return (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return axios
      .post(apiUrl + "/api/signup", userData, config)
      .then((response) => {
        dispatch(SignupSuccess(response.data));
        return response.data;
      })
      .catch((error) => {
        dispatch(SignupFailure(error.data));
        return error;
      });
  };
};
export const LoginUser = (userData) => {
  return (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return axios
      .post(apiUrl + "/api/login", userData, config)
      .then((response) => {
        dispatch(LoginSuccess(response.data));
        return response.data;
      })
      .catch((error) => {
        dispatch(LoginFailure(error.data));
        return error;
      });
  };
};

