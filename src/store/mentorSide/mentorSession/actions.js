import {
  MENTOR_SESSION_DASH,
  MENTOR_SESSION_DASH_SUCCESS,
  MENTOR_SESSION_DASH_API_ERROR
  } from "./actionTypes";
  
  export const mentorSessSuccess = (actionType, data) => {
    return {
      type:  MENTOR_SESSION_DASH_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const mentorSessDetail = actionType => {
    return {
      type:  MENTOR_SESSION_DASH,
      payload: actionType,
    };
  };
  
  export const mentorSessApiError = (actionType, error) => {
    return {
      type:  MENTOR_SESSION_DASH_API_ERROR,
      payload: {actionType, error},
    };
  };
  