import axios from "axios";
import config from "../config/config";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// Login user
export const loginUser = (userData) => (dispatch) => {
  axios
    .post("http://10.10.11.144:8000/api/users/login", userData)
    .then((res) => {
      localStorage.setItem("userToken", JSON.stringify(res.data.token));
      dispatch({
        type: SET_CURRENT_USER,
        payload: res.data.token,
      });
      console.log(res.data.token, "-----------");
      window.location.href = "/dashboard";
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};
