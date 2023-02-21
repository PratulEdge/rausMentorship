import {
  UC_SESSION_SUCCESS,
  UC_SESSION,
  UC_SESSION_API_ERROR,
  } from "./actionTypes";
  
  export const UC_SessionsSuccess = (actionType, data) => {
    return {
      type:  UC_SESSION_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const UC_Sessions = actionType => {
    return {
      type:  UC_SESSION,
      payload: actionType,
    };
  };
  
  export const UC_SessionsApiError = (actionType, error) => {
    return {
      type:  UC_SESSION_API_ERROR,
      payload: {actionType, error},
    };
  };
  