import {
    MENTOR_DETAIL,
    MENTOR_DETAIL_SUCCESS,
    MENTOR_DETAIL_API_ERROR
  } from "./actionTypes";
  
  export const mentorDetailSuccess = (actionType, data) => {
    return {
      type:  MENTOR_DETAIL_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const mentorDetail = actionType => {
    return {
      type:  MENTOR_DETAIL,
      payload: actionType,
    };
  };
  
  export const mentorApiError = (actionType, error) => {
    return {
      type:  MENTOR_DETAIL_API_ERROR,
      payload: {actionType, error},
    };
  };
  