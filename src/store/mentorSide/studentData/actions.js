import {
  STUDENT_DATA,
  STUDENT_DATA_SUCCESS,
  STUDENT_DATA_API_ERROR
  } from "./actionTypes";
  
  export const studDataSuccess = (actionType, data) => {
    return {
      type:  STUDENT_DATA_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const studDataDetail = actionType => {
    return {
      type:  STUDENT_DATA,
      payload: actionType,
    };
  };
  
  export const studDataApiError = (actionType, error) => {
    return {
      type:  STUDENT_DATA_API_ERROR,
      payload: {actionType, error},
    };
  };
  