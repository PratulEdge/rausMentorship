import {
  MENTOR_CREATE_API_ERROR,
  MENTOR_CREATE_SUCCESS,
  MENTOR_CREATE_USER,
} from "./actionTypes";

const initialState = {
  error: "",
  loading: false,
};

const mentorCreate = (state = initialState, action) => {
  switch (action.type) {
    case MENTOR_CREATE_USER:
      state = {
        ...state,
        loading: true,
      };
      break;
    case MENTOR_CREATE_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case MENTOR_CREATE_API_ERROR:
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

export default mentorCreate;
