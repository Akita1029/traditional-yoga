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

// Set google logged in user
export const setCurrentGoogleUser = (res) => {
  localStorage.setItem("userToken", JSON.stringify(res));
  console.log(res, "googleloginresdata");
  return {
    type: SET_CURRENT_USER,
    payload: res,
  };
};

// Login user
export const loginUser = (userData) => (dispatch) => {
  axios
    .post(`${config.server}api/users/login`, userData)
    .then((res) => {
      switch (res.status) {
        case 200:
          toast.success('Welcome! You signed in successfully!', {
            position: toast.POSITION.TOP_RIGHT
          })
          console.log("userToken:", res.data)
          localStorage.setItem("userToken", JSON.stringify(res.data))
          dispatch({
            type: SET_CURRENT_USER,
            payload: res.data,
          })
          switch (res.data.role) {
            case 0:
              window.location.href = "/admindashboard"
              break
            case 1:
            case 2:
              window.location.href = "/profile"
              break
            case 3:
              console.log(res)
              if(!res.data.resetPassword)
                window.location.href = "/profile"
              else
                window.location.href = "/requestreset"
              break
            default:
              window.location.href = "/ty/courses/main"
              break
          }
          break
        case 201:
          toast.warning('Please wait the approval of mentors or Submit the Application form...', {
            position: toast.POSITION.TOP_RIGHT
          })
          break
        case 202:
          toast.error('You are restricted to sign in. Please contacts the support team...', {
            position: toast.POSITION.TOP_RIGHT
          })
          break
        case 203:
          toast.warning('Please type correct password...', {
            position: toast.POSITION.TOP_RIGHT
          })
          break
        case 204:
          toast.warning('The email you typed not registered...', {
            position: toast.POSITION.TOP_RIGHT
          })
          break
        case 205:
          toast.warning('Please type correct credientials...', {
            position: toast.POSITION.TOP_RIGHT
          })
          break
        default:
          toast.warning('Please type correct credientials...', {
            position: toast.POSITION.TOP_RIGHT
          })
          break
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
  })
}

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
};



export const registerUser = (regUserData) => (dispatch) => {
  axios
    .post(`${config.server}api/users/signup`, regUserData)
    .then((res) => {
      console.log("Result:" , res)
      if (res.status === 201) {
        toast.success('Welcome! You signed up successfully! Please submit the Application Form to start learning yoga now. ', {
          position: toast.POSITION.TOP_RIGHT
        });
        window.location.href = "/ty/courses/main";
      } else if (res.status === 204) {
        toast.warning('Sign up fail', {
          position: toast.POSITION.TOP_RIGHT
        });
      } else if (res.status === 205) {
        toast.warning('Email Exists! Please try again sign up.', {
          position: toast.POSITION.TOP_RIGHT
        });
      } else if (res.status === 200){
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
