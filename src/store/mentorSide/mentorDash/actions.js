import {
  MENTOR_DASH_DETAIL,
  MENTOR_DASH_DETAIL_SUCCESS,
  MENTOR_DASH_DETAIL_API_ERROR
  } from "./actionTypes";
  
  export const mentorDashSuccess = (actionType, data) => {
    return {
      type:  MENTOR_DASH_DETAIL_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const mentorDashDetail = actionType => {
    return {
      type:  MENTOR_DASH_DETAIL,
      payload: actionType,
    };
  };
  
  export const mentorDashApiError = (actionType, error) => {
    return {
      type:  MENTOR_DASH_DETAIL_API_ERROR,
      payload: {actionType, error},
    };
  };
  