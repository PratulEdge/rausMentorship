import {
  BOOK_SESSION,
  BOOK_SESSION_SUCCESS,
  BOOK_SESSION_API_ERROR,
} from "./actionTypes";

export const book_Sessions = (user, history, id) => {
  return {
    type: BOOK_SESSION,
    payload: { user, history, id },
  };
};

export const book_SessionsSuccess = user => {
  return {
    type: BOOK_SESSION_SUCCESS,
    payload: user,
  };
};

export const book_SessionsApiError = error => {
  return {
    type: BOOK_SESSION_API_ERROR,
    payload: error,
  };
};