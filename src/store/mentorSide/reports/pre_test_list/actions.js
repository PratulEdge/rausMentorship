import {
  PRE_TEST_LIST,
  PRE_TEST_LIST_SUCCESS,
  PRE_TEST_LIST_API_ERROR,
  } from "./actionTypes";
  
  export const preTestListSuccess = (actionType, data) => {
    return {
      type:  PRE_TEST_LIST_SUCCESS,
      payload: { actionType, data },
    };
  };
  
  export const preTestListProfile = ( actionType) => {
    return {
      type:  PRE_TEST_LIST,
      payload: {actionType},
    };
  };
  
  export const preTestListApiError = (actionType, error) => {
    return {
      type:  PRE_TEST_LIST_API_ERROR,
      payload: {actionType, error},
    };
  };
  