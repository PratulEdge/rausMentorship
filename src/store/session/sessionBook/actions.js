import {
  STU_BOOK_SESSION,
  STU_BOOK_SESSION_SUCCESS,
  STU_BOOK_SESSION_API_ERROR,
} from "./actionTypes";

export const sessionBooking = (user, history) => {
  return {
    type: STU_BOOK_SESSION,
    payload: { user, history },
  };
};

export const sessionBookingSuccess = user => {
  return {
    type: STU_BOOK_SESSION_SUCCESS,
    payload: user,
  };
};

export const sessionBookingApiError = error => {
  return {
    type: STU_BOOK_SESSION_API_ERROR,
    payload: error,
  };
};