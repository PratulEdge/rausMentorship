import {
  DELETE_SESSION_API_ERROR,
  DELETE_SESSION_SUCCESS,
  DELETE_SESSION,
} from "./actionTypes";

const initialState = {
  error: "",
  loading: false,
};

const deleteSessions = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_SESSION:
      state = {
        ...state,
        loading: true,
      };
      break;
    case DELETE_SESSION_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case DELETE_SESSION_API_ERROR:
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

export default deleteSessions;
