import {
  MENTOR_DELETE_USER,
  MENTOR_DELETE_SUCCESS,
  MENTOR_DELETE_API_ERROR,
} from "./actionTypes";

export const mentorDeleteUser = (user, history, mentor_id) => {
  console.log(mentor_id, "action mentor id")
  return {
    type: MENTOR_DELETE_USER,
    payload: { user, history, mentor_id },
  };
};

export const mentorDeleteSuccess = user => {
  return {
    type: MENTOR_DELETE_SUCCESS,
    payload: user,
  };
};

export const mentorDeleteApiError = error => {
  return {
    type: MENTOR_DELETE_API_ERROR,
    payload: error,
  };
};