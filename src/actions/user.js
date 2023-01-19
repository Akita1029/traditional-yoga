import axios from "axios";
import config from "../config/config";
<<<<<<< HEAD
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  CLEAR_ERRORS,
  LOGOUT,
  GET_USER_DATA,
} from "./types";
=======
import { GET_ERRORS, SET_CURRENT_USER, CLEAR_ERRORS, LOGOUT, GET_USER_DATA } from "./types";

>>>>>>> b02edb859c2ba27b3324f0168ada98966850e854
// get user data
export const getuserdata = () => (dispatch) => {
  axios
    .post(config.server + "api/users/alldata")
    .then((res) => {
      dispatch({
        type: GET_USER_DATA,
        payload: res.data,
      });
      // dispatch(setLoadingdata(false));
    })
    .catch((err) => console.log(err));
};

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
    .post(config.server + "api/users/login", userData)
    .then((res) => {
      localStorage.setItem("userToken", JSON.stringify(res.data));
      dispatch({
        type: SET_CURRENT_USER,
        payload: res.data,
      });
      switch (res.data.role) {
        case 0:
          window.location.href = "/admindashboard";
          break;
        case 1:
          window.location.href = "/admindashboard";
          break;
        case 2:
          window.location.href = "/admindashboard";
          break;
        case 3:
          window.location.href = "/dashboard";
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Logout user
export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: {},
  });
  dispatch({
    type: CLEAR_ERRORS,
    payload: {},
  });
  // localStorage.removeItem("userToken", res.data.token);
};

export const registerUser = (userData) => (dispatch) => {
  axios
    .post(config.server + "api/users/signup", userData)
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
