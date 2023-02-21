import {
  MENTOR_EDIT_USER,
  MENTOR_EDIT_SUCCESS,
  MENTOR_EDIT_API_ERROR,
} from "./actionTypes";

export const mentorEditUser = (user, history, id) => {
  return {
    type: MENTOR_EDIT_USER,
    payload: { user, history, id },
  };
};

export const mentorEditSuccess = user => {
  return {
    type: MENTOR_EDIT_SUCCESS,
    payload: user,
  };
};

export const mentorEditApiError = error => {
  return {
    type: MENTOR_EDIT_API_ERROR,
    payload: error,
  };
};