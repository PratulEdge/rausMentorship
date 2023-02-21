import {
    CITY,
    CITY_SUCCESS,
    CITY_API_ERROR
  } from "./actionTypes";
  
  export const citySuccess = (actionType, data) => {
    return {
      type:  CITY_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const cityDetail = (state_id,actionType) => {
    return {
      type:  CITY,
      payload: state_id,actionType,
    };
  };
  
  export const cityApiError = (actionType, error) => {
    return {
      type:  CITY_API_ERROR,
      payload: {actionType, error},
    };
  };
  