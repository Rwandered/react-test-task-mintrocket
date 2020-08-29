import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import modalReducer from "./modalReducer";

export const rootReducer = combineReducers({
  users: userReducer,
  auth: authReducer,
  modal: modalReducer,
})