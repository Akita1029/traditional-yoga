import axios from "axios";
import config from "../config/config";
import { GET_ERRORS, SET_CURRENT_USER, CLEAR_ERRORS, LOGOUT } from "./types";
import { toast } from 'react-toastify';

export const takeCourse = (regData) => (dispatch) => {
    axios
      .post(`${config.server}api/courses/takecourse`, regData)
      .then((res) => {
        switch(res.status){
            case 200:
                toast.success('You submitted successfully and updated profile.', {
                    position: toast.POSITION.TOP_RIGHT
                })
                break;
            case 201:
                toast.success('You submitted successfully and created profile.', {
                    position: toast.POSITION.TOP_RIGHT
                })
                break;
            case 401:
            case 404:
                toast.warning('You submitted success but Family info is not correct. Please try again', {
                    position: toast.POSITION.TOP_RIGHT
                })
                break;
            case 402:
            case 405:
                toast.warning('You submitted success and Student info is not correct. Please try again', {
                    position: toast.POSITION.TOP_RIGHT
                })
                break;
            case 403:
            case 406:
                toast.warning('Submit fail. Please try again.', {
                    position: toast.POSITION.TOP_RIGHT
                })
                break;
            case 407:
                toast.error('Already registered student', {
                    position: toast.POSITION.TOP_RIGHT
                })
                break;
            default:
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