import {
  BOOK_SESSION,
  BOOK_SESSION_SUCCESS,
  BOOK_SESSION_API_ERROR,
} from "./actionTypes";

export const sessionBooking = (user, history) => {
  return {
    type: BOOK_SESSION,
    payload: { user, history },
  };
};

export const sessionBookingSuccess = user => {
  return {
    type: BOOK_SESSION_SUCCESS,
    payload: user,
  };
};

export const sessionBookingApiError = error => {
  return {
    type: BOOK_SESSION_API_ERROR,
    payload: error,
  };
};