import {
  ADD_MENTOR_USER,
  ADD_MENTOR_SUCCESS,
  ADD_MENTOR_API_ERROR,
} from "./actionTypes";

export const addMentorUser = (user, history, id) => {
  return {
    type: ADD_MENTOR_USER,
    payload: { user, history, id },
  };
};

export const addMentorSuccess = user => {
  return {
    type: ADD_MENTOR_SUCCESS,
    payload: user,
  };
};

export const addMentorApiError = error => {
  return {
    type: ADD_MENTOR_API_ERROR,
    payload: error,
  };
};