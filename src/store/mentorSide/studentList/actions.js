import {
  MS_STUDENT_LIST,
  MS_STUDENT_LIST_SUCCESS,
  MS_STUDENT_LIST_API_ERROR
  } from "./actionTypes";
  
  export const ms_studentSuccess = (actionType, data) => {
    return {
      type:  MS_STUDENT_LIST_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const ms_student = actionType => {
    return {
      type:  MS_STUDENT_LIST,
      payload: actionType,
    };
  };
  
  export const ms_studentApiError = (actionType, error) => {
    return {
      type:  MS_STUDENT_LIST_API_ERROR,
      payload: {actionType, error},
    };
  };
  