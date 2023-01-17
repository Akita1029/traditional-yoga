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
    .post("/api/users/login", userData)
    .then((res) => {
      localStorage.setItem("userToken", JSON.stringify(res.data));
      dispatch({
        type: SET_CURRENT_USER,
        payload: res.data,
      });
      console.log(res);
      window.location.href = "/dashboard";
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const registerUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/signup", userData)
    .then((res) => {
      console.log(res.data.messages);      
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};
