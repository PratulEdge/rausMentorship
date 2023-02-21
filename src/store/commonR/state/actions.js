import {
    STATE,
    STATE_SUCCESS,
    STATE_API_ERROR
  } from "./actionTypes";
  
  export const stateSuccess = (actionType, data) => {
    return {
      type:  STATE_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const stateDetail = actionType => {
    return {
      type:  STATE,
      payload: actionType,
    };
  };
  
  export const stateApiError = (actionType, error) => {
    return {
      type:  STATE_API_ERROR,
      payload: {actionType, error},
    };
  };
  