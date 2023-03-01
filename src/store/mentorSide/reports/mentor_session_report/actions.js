import {
  MENTOR_SESSION_REPORT,
  MENTOR_SESSION_REPORT_SUCCESS,
  MENTOR_SESSION_REPORT_API_ERROR,
  } from "./actionTypes";
  
  export const Mnt_Sess_report_Success = (actionType, data) => {
    return {
      type:  MENTOR_SESSION_REPORT_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const Mnt_Sess_report = ( actionType) => {
    return {
      type:  MENTOR_SESSION_REPORT,
      payload: {actionType},
    };
  };
  
  export const Mnt_Sess_report_ApiError = (actionType, error) => {
    return {
      type:  MENTOR_SESSION_REPORT_API_ERROR,
      payload: {actionType, error},
    };
  };
  