import axios from "axios";
import { GET_ERRORS, NOTIFY_MESSAGE } from "./types";
export const querySubmit = (userData) => (dispatch) => {
  axios
    .post("/api/support/submit", userData)
    .then((res) => {
      if(res.data.message === "success"){
        dispatch({
          type: NOTIFY_MESSAGE,
          payload: "QuerySubmitSuccess",
        });
      } else {
        dispatch({
          type: NOTIFY_MESSAGE,
          payload: "QuerySubmitFail",
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