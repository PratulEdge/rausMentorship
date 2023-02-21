import {
  MS_STUDENT_PROFILE,
  MS_STUDENT_PROFILE_SUCCESS,
  MS_STUDENT_PROFILE_API_ERROR,
  } from "./actionTypes";
  
  export const Ms_studentProfileSuccess = (actionType, data) => {
    return {
      type:  MS_STUDENT_PROFILE_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const Ms_studentProfile = ( id,actionType) => {
    return {
      type:  MS_STUDENT_PROFILE,
      payload: {actionType, id},
    };
  };
  
  export const Ms_studentProfileApiError = (actionType, error) => {
    return {
      type:  MS_STUDENT_PROFILE_API_ERROR,
      payload: {actionType, error},
    };
  };
  