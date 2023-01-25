import axios from "axios";
import config from "../config/config";
import { SET_COURSE_DATA, GET_ERRORS } from "./types";
import { toast } from 'react-toastify';
// Set logged in user
export const getCoursesForCourseManagement = () => (dispatch) => {
  axios
    .get(`${config.server}api/courses/alldata`)
    .then((res) => {
      console.log("Result:", res)
      if (res.status === 201) {
      } else if (res.status === 204) {
      } else if (res.status === 205) {
      } else if (res.status === 200) {
        dispatch({
          type: SET_COURSE_DATA,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const updateCoursesForCourseManagement = (data) => (dispatch) => {
  axios
    .post(`${config.server}api/courses/update`, data)
    .then((res) => {
      console.log("Result:", res)
      if (res.status === 201) {
      } else if (res.status === 204) {
      } else if (res.status === 205) {
      } else if (res.status === 200) {
        toast.success('Updated successfully')
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const createCoursesForCourseManagement = (data) => (dispatch) => {
  axios
    .post(`${config.server}api/courses/create`, data)
    .then((res) => {
      console.log("Result:", res)
      if (res.status === 201) {
      } else if (res.status === 204) {
      } else if (res.status === 205) {
      } else if (res.status === 200) {
        toast.success('Created successfully')
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const deleteCoursesForCourseManagement = (id) => (dispatch) => {
  axios
    .post(`${config.server}api/courses/delete`, { id })
    .then((res) => {
      console.log("Result:", res)
      if (res.status === 201) {
      } else if (res.status === 204) {
      } else if (res.status === 205) {
      } else if (res.status === 200) {
        toast.success('Deleted successfully')
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};