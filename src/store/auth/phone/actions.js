import {
  PHONE_LOGIN_USER,
  PHONE_LOGIN_SUCCESS,
  PHONE_LOGOUT_USER,
  PHONE_LOGOUT_USER_SUCCESS,
  PHONE_API_ERROR,
} from "./actionTypes";

export const phoneLoginUser = (user, history) => {
  return {
    type: PHONE_LOGIN_USER,
    payload: { user, history },
  };
};

export const phoneLoginSuccess = user => {
  return {
    type: PHONE_LOGIN_SUCCESS,
    payload: user,
  };
};

export const phoneLogoutUser = history => {
  return {
    type: PHONE_LOGOUT_USER,
    payload: { history },
  };
};

export const phoneLogoutUserSuccess = () => {
  return {
    type: PHONE_LOGOUT_USER_SUCCESS,
    payload: {},
  };
};

export const phoneApiError = error => {
  return {
    type: PHONE_API_ERROR,
    payload: error,
  };
};
