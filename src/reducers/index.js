import { combineReducers } from "redux";
import userReducer from "./userReducer";
import modalReducer from "./modalReducer";
export default combineReducers({
  users: userReducer,
  show: modalReducer
});
