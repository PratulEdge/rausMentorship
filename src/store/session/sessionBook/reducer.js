import {
  STU_BOOK_SESSION,
  STU_BOOK_SESSION_SUCCESS,
  STU_BOOK_SESSION_API_ERROR,
} from "./actionTypes";

const initialState = {
  error: "",
  loading: false,
};

const SessionBook = (state = initialState, action) => {
  switch (action.type) {
    case STU_BOOK_SESSION:
      state = {
        ...state,
        loading: true,
      };
      break;
    case STU_BOOK_SESSION_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case STU_BOOK_SESSION_API_ERROR:
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

export default SessionBook;
