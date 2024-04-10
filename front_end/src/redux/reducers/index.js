import { combineReducers } from "redux";
import {
  SignupReducer,
  LoginReducer
} from "./reducers";

const rootReducer = combineReducers({
  signup: SignupReducer,
  login: LoginReducer
});

export default rootReducer;
