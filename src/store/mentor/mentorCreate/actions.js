import {
  MENTOR_CREATE_USER,
  MENTOR_CREATE_SUCCESS,
  MENTOR_CREATE_API_ERROR,
} from "./actionTypes";

export const mentorCreateUser = (user, history) => {
  return {
    type: MENTOR_CREATE_USER,
    payload: { user, history },
  };
};

export const mentorCreateSuccess = user => {
  return {
    type: MENTOR_CREATE_SUCCESS,
    payload: user,
  };
};

export const mentorCreateApiError = error => {
  return {
    type: MENTOR_CREATE_API_ERROR,
    payload: error,
  };
};