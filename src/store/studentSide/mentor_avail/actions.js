import {
  STU_MENTOR_AVAIL,
  STU_MENTOR_AVAIL_SUCCESS,
  STU_MENTOR_AVAIL_API_ERROR
  } from "./actionTypes";
  
  export const stuMentorAvailSuccess = (actionType, data) => {
    return {
      type:  STU_MENTOR_AVAIL_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const stuMentorAvailDetail = (mentor_id,actionType) => {
    return {
      type:  STU_MENTOR_AVAIL,
      payload: mentor_id,actionType,
    };
  };
  
  export const stuMentorAvailApiError = (actionType, error) => {
    return {
      type: STU_MENTOR_AVAIL_API_ERROR,
      payload: {actionType, error},
    };
  };
  