import {
  STUDENT_PAST_SESS,
  STUDENT_PAST_SESS_SUCCESS,
  STUDENT_PAST_SESS_API_ERROR
  } from "./actionTypes";
  
  export const studentPastSessSuccess = (actionType, data) => {
    return {
      type:  STUDENT_PAST_SESS_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const studentPastSessDetail = actionType => {
    return {
      type:  STUDENT_PAST_SESS,
      payload: actionType,
    };
  };
  
  export const studentPastSessApiError = (actionType, error) => {
    return {
      type: STUDENT_PAST_SESS_API_ERROR,
      payload: {actionType, error},
    };
  };
  