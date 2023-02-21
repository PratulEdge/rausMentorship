import {
  A_SESSION_SUCCESS,
  A_SESSION,
  A_SESSION_API_ERROR,
  } from "./actionTypes";
  
  export const A_SessionsSuccess = (actionType, data) => {
    return {
      type:  A_SESSION_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const A_Sessions = actionType => {
    return {
      type:  A_SESSION,
      payload: actionType,
    };
  };
  
  export const A_SessionsApiError = (actionType, error) => {
    return {
      type:  A_SESSION_API_ERROR,
      payload: {actionType, error},
    };
  };
  