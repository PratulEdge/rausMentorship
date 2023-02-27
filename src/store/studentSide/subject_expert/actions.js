import {
  STU_SUBJECT_EXPERT,
  STU_SUBJECT_EXPERT_SUCCESS,
  STU_SUBJECT_EXPERT_API_ERROR
  } from "./actionTypes";
  
  export const stuSubjectExpertSuccess = (actionType, data) => {
    return {
      type:  STU_SUBJECT_EXPERT_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const stuSubjectExpertDetail = actionType => {
    return {
      type:  STU_SUBJECT_EXPERT,
      payload: actionType,
    };
  };
  
  export const stuSubjectExpertApiError = (actionType, error) => {
    return {
      type: STU_SUBJECT_EXPERT_API_ERROR,
      payload: {actionType, error},
    };
  };
  