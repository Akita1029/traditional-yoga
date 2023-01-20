import axios from "axios";
import config from "../config/config";
import { GET_ERRORS, SET_CURRENT_USER, CLEAR_ERRORS, LOGOUT } from "./types";
import { toast } from 'react-toastify';
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
    .post(`${config.server}api/users/login`, userData)
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
    payload: {},
  });
  dispatch({
    type: CLEAR_ERRORS,
    payload: {},
  });
  // localStorage.removeItem("userToken", res.data.token);
};

export const takeCourse = (userData) => (dispatch) => {
  axios
    .post(`${config.server}api/users/signup`, userData)
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

export const registerUser = (regUserData) => (dispatch) => {
  axios
    .post(`${config.server}api/users/signup`, regUserData)
    .then((res) => {
      if (res.statusCode === 200) {
        toast.success('Welcome! You signed up successfully! Please submit the Application Form to start learning yoga now. ', {
          position: toast.POSITION.TOP_RIGHT
        });
        window.location.href = "/ty/courses/main";
      } else if (res.statusCode === 501) {
        toast.warning('Sign up fail', {
          position: toast.POSITION.TOP_RIGHT
        });
      } else if (res.statusCode === 502) {
        toast.warning('Email Exists! Please try again sign up.', {
          position: toast.POSITION.TOP_RIGHT
        });
      } else if (res.statusCode === 201){
        toast.success('Welcome! You signed up successfully as Admin.', {
          position: toast.POSITION.TOP_RIGHT
        });
        localStorage.setItem("userToken", JSON.stringify(res.data));
        dispatch({
          type: SET_CURRENT_USER,
          payload: res.data,
        });
        window.location.href = "/admindashboard";
      }

    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};
