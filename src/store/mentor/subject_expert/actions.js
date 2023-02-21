import {
    SUBJECT_EXPERT,
    SUBJECT_EXPERT_SUCCESS,
    SUBJECT_EXPERT_API_ERROR
  } from "./actionTypes";
  
  export const subjectExpertSuccess = (actionType, data) => {
    return {
      type:  SUBJECT_EXPERT_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const subjectExpert = actionType => {
    return {
      type:  SUBJECT_EXPERT,
      payload: actionType,
    };
  };
  
  export const subjectExpertApiError = (actionType, error) => {
    return {
      type:  SUBJECT_EXPERT_API_ERROR,
      payload: {actionType, error},
    };
  };
  