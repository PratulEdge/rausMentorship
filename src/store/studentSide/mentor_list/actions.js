import {
  STU_MENTOR_LIST,
  STU_MENTOR_LIST_SUCCESS,
  STU_MENTOR_LIST_API_ERROR
  } from "./actionTypes";
  
  export const stuMentorListSuccess = (actionType, data) => {
    return {
      type:  STU_MENTOR_LIST_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const stuMentorListDetail = actionType => {
    return {
      type:  STU_MENTOR_LIST,
      payload: actionType,
    };
  };
  
  export const stuMentorListApiError = (actionType, error) => {
    return {
      type: STU_MENTOR_LIST_API_ERROR,
      payload: {actionType, error},
    };
  };
  