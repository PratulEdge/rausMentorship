import {
    STUDENT_DETAIL,
    STUDENT_DETAIL_SUCCESS,
    STUDENT_DETAIL_API_ERROR
  } from "./actionTypes";
  
  export const studentDetailSuccess = (actionType, data) => {
    return {
      type:  STUDENT_DETAIL_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const studentDetail = actionType => {
    return {
      type:  STUDENT_DETAIL,
      payload: actionType,
    };
  };
  
  export const studentApiError = (actionType, error) => {
    return {
      type:  STUDENT_DETAIL_API_ERROR,
      payload: {actionType, error},
    };
  };
  