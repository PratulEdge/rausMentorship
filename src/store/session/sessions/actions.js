import {
  MENTOR_SESSION,
  MENTOR_SESSION_SUCCESS,
  MENTOR_SESSION_API_ERROR,
  } from "./actionTypes";
  
  export const mentorSessionsSuccess = (actionType, data) => {
    return {
      type:  MENTOR_SESSION_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const mentorSessions = actionType => {
    return {
      type:  MENTOR_SESSION,
      payload: actionType,
    };
  };
  
  export const mentorSessionsApiError = (actionType, error) => {
    return {
      type:  MENTOR_SESSION_API_ERROR,
      payload: {actionType, error},
    };
  };
  