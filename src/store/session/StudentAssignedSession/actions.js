import {
  STUDENT_ASSIGNED_SESSION,
  STUDENT_ASSIGNED_SESSION_SUCCESS,
  STUDENT_ASSIGNED_SESSION_API_ERROR,
  } from "./actionTypes";
  
  export const studentSessionSuccess = (actionType, data) => {
    return {
      type:  STUDENT_ASSIGNED_SESSION_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const studentSession = ( id,actionType) => {
    return {
      type:  STUDENT_ASSIGNED_SESSION,
      payload: {actionType, id},
    };
  };
  
  export const studentSessionApiError = (actionType, error) => {
    return {
      type:  STUDENT_ASSIGNED_SESSION_API_ERROR,
      payload: {actionType, error},
    };
  };
  