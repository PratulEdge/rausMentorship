import {
  T_SESSION_SUCCESS,
  T_SESSION,
  T_SESSION_API_ERROR,
  } from "./actionTypes";
  
  export const todaySessionsSuccess = (actionType, data) => {
    return {
      type:  T_SESSION_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const todaySessions = actionType => {
    return {
      type:  T_SESSION,
      payload: actionType,
    };
  };
  
  export const todaySessionsApiError = (actionType, error) => {
    return {
      type:  T_SESSION_API_ERROR,
      payload: {actionType, error},
    };
  };
  