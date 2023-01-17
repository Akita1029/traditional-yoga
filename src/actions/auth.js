import axios from "axios";
import config from "../config/config";
import { GET_ERRORS, SET_CURRENT_USER, CLEAR_ERRORS, LOGOUT } from "./types";

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
      localStorage.setItem("userToken", res.data.token);
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
          break;
        default:
          window.location.href = "/dashboard";
          break;          
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
  });
  dispatch({
    type: CLEAR_ERRORS,
    payload: {},
  });
  // localStorage.removeItem("userToken", res.data.token);
};

export const registerUser = (userData) => (dispatch) => {
  axios
    .post("/api/users/signup", userData)
    .then((res) => {
      localStorage.setItem("userToken", res.data.token);
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
          break;
        default:
          window.location.href = "/dashboard";
          break;          
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};
