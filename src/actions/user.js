import axios from "axios";
import config from "../config/config";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  CLEAR_ERRORS,
  LOGOUT,
  GET_USER_DATA,
} from "./types";

// get user data
export const getuserdata = () => (dispatch) => {
  axios
    .get(config.server + "api/users/alldata")
    .then((res) => {
      dispatch({
        type: GET_USER_DATA,
        payload: res.data,
      });
      // dispatch(setLoadingdata(false));
    })
    .catch((err) => console.log(err));
};
