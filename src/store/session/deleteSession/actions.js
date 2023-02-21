import {
  DELETE_SESSION,
  DELETE_SESSION_SUCCESS,
  DELETE_SESSION_API_ERROR,
} from "./actionTypes";

export const deleteSession = (user, history) => {
  return {
    type: DELETE_SESSION,
    payload: { user, history },
  };
};

export const deleteSessionSuccess = user => {
  return {
    type: DELETE_SESSION_SUCCESS,
    payload: user,
  };
};

export const deleteSessionApiError = error => {
  return {
    type: DELETE_SESSION_API_ERROR,
    payload: error,
  };
};