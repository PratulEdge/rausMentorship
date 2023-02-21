import {
  SESSION_DETAIL,
  SESSION_DETAIL_SUCCESS,
  SESSION_DETAIL_API_ERROR,
  } from "./actionTypes";
  
  export const detailSessionsSuccess = (actionType, data) => {
    return {
      type:  SESSION_DETAIL_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const detailSessions = ( id,actionType) => {
    return {
      type:  SESSION_DETAIL,
      payload: {actionType, id},
    };
  };
  
  export const detailSessionsApiError = (actionType, error) => {
    return {
      type:  SESSION_DETAIL_API_ERROR,
      payload: {actionType, error},
    };
  };
  