import {
  STUDENT_PAST_SESSION_DETAIL,
  STUDENT_PAST_SESSION_DETAIL_SUCCESS,
  STUDENT_PAST_SESSION_DETAIL_API_ERROR,
  } from "./actionTypes";
  
  export const student_past_session_detail_Success = (actionType, data) => {
    return {
      type:  STUDENT_PAST_SESSION_DETAIL_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const student_past_session_detail = ( id,actionType) => {
    return {
      type:  STUDENT_PAST_SESSION_DETAIL,
      payload: {actionType, id},
    };
  };
  
  export const student_past_session_detail_ApiError = (actionType, error) => {
    return {
      type:  STUDENT_PAST_SESSION_DETAIL_API_ERROR,
      payload: {actionType, error},
    };
  };
  