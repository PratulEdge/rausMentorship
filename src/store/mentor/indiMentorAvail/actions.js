import {
    INDI_MENTOR_AVAIL,
    INDI_MENTOR_AVAIL_SUCCESS,
    INDI_MENTOR_AVAIL_API_ERROR
  } from "./actionTypes";
  
  export const indiMentorAvailSuccess = (actionType, data) => {
    return {
      type:  INDI_MENTOR_AVAIL_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const indiMentorAvail = (mentor_id,actionType) => {
    return {
      type:  INDI_MENTOR_AVAIL,
      payload: mentor_id,actionType,
    };
  };
  
  export const indiMentorAvailApiError = (actionType, error) => {
    return {
      type:  INDI_MENTOR_AVAIL_API_ERROR,
      payload: {actionType, error},
    };
  };
  