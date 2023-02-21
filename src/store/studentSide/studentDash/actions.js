import {
  STUDENT_DASH_DETAIL,
  STUDENT_DASH_DETAIL_SUCCESS,
  STUDENT_DASH_DETAIL_API_ERROR
  } from "./actionTypes";
  
  export const studentDashSuccess = (actionType, data) => {
    return {
      type:  STUDENT_DASH_DETAIL_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const studentDashDetail = actionType => {
    return {
      type:  STUDENT_DASH_DETAIL,
      payload: actionType,
    };
  };
  
  export const studentDashApiError = (actionType, error) => {
    return {
      type:  STUDENT_DASH_DETAIL_API_ERROR,
      payload: {actionType, error},
    };
  };
  