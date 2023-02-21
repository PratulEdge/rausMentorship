import {
  MENTOR_EDIT_API_ERROR,
  MENTOR_EDIT_SUCCESS,
  MENTOR_EDIT_USER,
} from "./actionTypes";

const initialState = {
  error: "",
  loading: false,
  user: null,
};

const mentorEdit = (state = initialState, action) => {
  switch (action.type) {
    case MENTOR_EDIT_USER:
      state = {
        ...state,
        loading: true,
      };
      break;
    case MENTOR_EDIT_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case MENTOR_EDIT_API_ERROR:
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

export default mentorEdit;
