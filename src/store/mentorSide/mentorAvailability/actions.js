import {
  MENTOR_AVAILABILITY,
  MENTOR_AVAILABILITY_SUCCESS,
  MENTOR_AVAILABILITY_API_ERROR
  } from "./actionTypes";
  
  export const mntAvailabilitySuccess = (actionType, data) => {
    return {
      type:  MENTOR_AVAILABILITY_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const mntAvailability = actionType => {
    return {
      type:  MENTOR_AVAILABILITY,
      payload: actionType,
    };
  };
  
  export const mntAvailabilityApiError = (actionType, error) => {
    return {
      type:  MENTOR_AVAILABILITY_API_ERROR,
      payload: {actionType, error},
    };
  };
  