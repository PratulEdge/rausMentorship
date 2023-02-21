import {
  MS_SESSION_DETAIL,
  MS_SESSION_DETAIL_SUCCESS,
  MS_SESSION_DETAIL_API_ERROR,
  } from "./actionTypes";
  
  export const ms_detailSessionsSuccess = (actionType, data) => {
    return {
      type:  MS_SESSION_DETAIL_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const ms_detailSessions = ( id,actionType) => {
    return {
      type:  MS_SESSION_DETAIL,
      payload: {actionType, id},
    };
  };
  
  export const ms_detailSessionsApiError = (actionType, error) => {
    return {
      type:  MS_SESSION_DETAIL_API_ERROR,
      payload: {actionType, error},
    };
  };
  