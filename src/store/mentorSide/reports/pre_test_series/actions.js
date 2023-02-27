import {
  PRE_TEST_SERIES,
  PRE_TEST_SERIES_SUCCESS,
  PRE_TEST_SERIES_API_ERROR,
  } from "./actionTypes";
  
  export const preTestSeriesSuccess = (actionType, data) => {
    return {
      type:  PRE_TEST_SERIES_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const preTestSeriesProfile = ( actionType) => {
    return {
      type:  PRE_TEST_SERIES,
      payload: {actionType},
    };
  };
  
  export const preTestSeriesApiError = (actionType, error) => {
    return {
      type:  PRE_TEST_SERIES_API_ERROR,
      payload: {actionType, error},
    };
  };
  