import {
  STUDENT_PROFILE,
  STUDENT_PROFILE_SUCCESS,
  STUDENT_PROFILE_API_ERROR,
  } from "./actionTypes";
  
  export const studentProfileSuccess = (actionType, data) => {
    return {
      type:  STUDENT_PROFILE_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const studentProfile = ( id,actionType) => {
    return {
      type:  STUDENT_PROFILE,
      payload: {actionType, id},
    };
  };
  
  export const studentProfileApiError = (actionType, error) => {
    return {
      type:  STUDENT_PROFILE_API_ERROR,
      payload: {actionType, error},
    };
  };
  