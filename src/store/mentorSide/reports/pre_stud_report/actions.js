import {
  PRE_STUD_REPORT,
  PRE_STUD_REPORT_SUCCESS,
  PRE_STUD_REPORT_API_ERROR,
  } from "./actionTypes";
  
  export const Pre_stud_report_Success = (actionType, data) => {
    return {
      type:  PRE_STUD_REPORT_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const Pre_stud_report = ( id,email,examType,actionType) => {
    return {
      type:  PRE_STUD_REPORT,
      payload: {actionType,examType,email, id},
    };
  };
  
  export const Pre_stud_report_ApiError = (actionType, error) => {
    return {
      type:  PRE_STUD_REPORT_API_ERROR,
      payload: {actionType, error},
    };
  };
  