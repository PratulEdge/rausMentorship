import {
  MS_MENTOR_AVAIL_API_ERROR,
  MS_MENTOR_AVAIL_SUCCESS,
  MS_MENTOR_AVAIL_USER,
} from "./actionTypes";

const initialState = {
  error: "",
  loading: false,
};

const msMentorAvail = (state = initialState, action) => {
  switch (action.type) {
    case MS_MENTOR_AVAIL_USER:
      state = {
        ...state,
        loading: true,
      };
      break;
    case MS_MENTOR_AVAIL_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case MS_MENTOR_AVAIL_API_ERROR:
      state = {
        ...state,
        error: action.payload.data,
        loading: false,
        isUserLogout: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default msMentorAvail;
