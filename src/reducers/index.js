import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";
import courseReducer from "./courseReducer"
// import loadingReducer from "./loadingReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  users: userReducer,
  courses: courseReducer
  // loading: loadingReducer,
});
