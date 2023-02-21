import {
  MENTOR_ASSIGNED_SESSION,
  MENTOR_ASSIGNED_SESSION_SUCCESS,
  MENTOR_ASSIGNED_SESSION_API_ERROR,
  } from "./actionTypes";
  
  export const mentorSessionSuccess = (actionType, data) => {
    return {
      type:  MENTOR_ASSIGNED_SESSION_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const mentorSession = ( id,actionType) => {
    return {
      type:  MENTOR_ASSIGNED_SESSION,
      payload: {actionType, id},
    };
  };
  
  export const mentorSessionApiError = (actionType, error) => {
    return {
      type:  MENTOR_ASSIGNED_SESSION_API_ERROR,
      payload: {actionType, error},
    };
  };
  