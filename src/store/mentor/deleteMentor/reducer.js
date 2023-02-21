import {
  MENTOR_DELETE_API_ERROR,
  MENTOR_DELETE_SUCCESS,
  MENTOR_DELETE_USER,
} from "./actionTypes";

const initialState = {
  error: "",
  loading: false,
  user: null,
};

const mentorDelete = (state = initialState, action) => {
  switch (action.type) {
    case MENTOR_DELETE_USER:
      state = {
        ...state,
        loading: true,
      };
      break;
    case MENTOR_DELETE_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case MENTOR_DELETE_API_ERROR:
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

export default mentorDelete;
