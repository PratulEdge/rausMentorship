import {
  MENTOR_PROFILE,
  MENTOR_PROFILE_SUCCESS,
  MENTOR_PROFILE_API_ERROR,
  } from "./actionTypes";
  
  export const mentorProfileSuccess = (actionType, data) => {
    return {
      type:  MENTOR_PROFILE_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const mentorProfile = ( id,actionType) => {
    return {
      type:  MENTOR_PROFILE,
      payload: {actionType, id},
    };
  };
  
  export const mentorProfileApiError = (actionType, error) => {
    return {
      type:  MENTOR_PROFILE_API_ERROR,
      payload: {actionType, error},
    };
  };
  