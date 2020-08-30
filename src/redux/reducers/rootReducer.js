import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import modalReducer from "./modalReducer";
import searchReducer from "./searchReducer";
import pagesReducer from "./pagesReducer";

export const rootReducer = combineReducers({
  users: userReducer,
  auth: authReducer,
  modal: modalReducer,
  search: searchReducer,
  pages: pagesReducer,
})