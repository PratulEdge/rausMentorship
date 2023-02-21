import {
  MENTOR_AVAIL_API_ERROR,
  MENTOR_AVAIL_SUCCESS,
  MENTOR_AVAIL_USER,
} from "./actionTypes";

const initialState = {
  error: "",
  loading: false,
};

const mentorAvail = (state = initialState, action) => {
  switch (action.type) {
    case MENTOR_AVAIL_USER:
      state = {
        ...state,
        loading: true,
      };
      break;
    case MENTOR_AVAIL_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case MENTOR_AVAIL_API_ERROR:
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

export default mentorAvail;
