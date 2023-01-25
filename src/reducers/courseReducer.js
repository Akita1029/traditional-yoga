import { SET_COURSE_DATA } from "../actions/types";

const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_COURSE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
