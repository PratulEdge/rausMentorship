import {
  MS_MENTOR_PROFILE,
  MS_MENTOR_PROFILE_SUCCESS,
  MS_MENTOR_PROFILE_API_ERROR
  } from "./actionTypes";
  
  export const ms_mentor_profile_success = (actionType, data) => {
    return {
      type:  MS_MENTOR_PROFILE_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const ms_mentor_profile = actionType => {
    return {
      type:  MS_MENTOR_PROFILE,
      payload: actionType,
    };
  };
  
  export const ms_mentor_profile_ApiError = (actionType, error) => {
    return {
      type:  MS_MENTOR_PROFILE_API_ERROR,
      payload: {actionType, error},
    };
  };
  