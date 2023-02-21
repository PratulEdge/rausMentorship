import {
  MENTOR_AVAIL_USER,
  MENTOR_AVAIL_SUCCESS,
  MENTOR_AVAIL_API_ERROR,
} from "./actionTypes";

export const mentorAvailUser = (user, history) => {
  return {
    type: MENTOR_AVAIL_USER,
    payload: { user, history },
  };
};

export const mentorAvailSuccess = user => {
  return {
    type: MENTOR_AVAIL_SUCCESS,
    payload: user,
  };
};

export const mentorAvailApiError = error => {
  return {
    type: MENTOR_AVAIL_API_ERROR,
    payload: error,
  };
};