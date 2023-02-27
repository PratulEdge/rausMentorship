import {
  MS_MENTOR_AVAIL_USER,
  MS_MENTOR_AVAIL_SUCCESS,
  MS_MENTOR_AVAIL_API_ERROR,
} from "./actionTypes";

export const msMentorAvailUser = (user, history) => {
  return {
    type: MS_MENTOR_AVAIL_USER,
    payload: { user, history },
  };
};

export const msMentorAvailSuccess = user => {
  return {
    type: MS_MENTOR_AVAIL_SUCCESS,
    payload: user,
  };
};

export const msMentorAvailApiError = error => {
  return {
    type: MS_MENTOR_AVAIL_API_ERROR,
    payload: error,
  };
};