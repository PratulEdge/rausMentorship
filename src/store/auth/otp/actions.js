import {
  OTP_VERIFY,
  OTP_VERIFY_SUCCESS,
  OTP_API_ERROR,
} from "./actionTypes";

export const otpverify = (user, history) => {
  return {
    type: OTP_VERIFY,
    payload: { user, history },
  };
};

export const otpverifysuccess = user => {
  return {
    type: OTP_VERIFY_SUCCESS,
    payload: user,
  };
};

// export const logoutUser = history => {
//   return {
//     type: LOGOUT_USER,
//     payload: { history },
//   };
// };

// export const logoutUserSuccess = () => {
//   return {
//     type: LOGOUT_USER_SUCCESS,
//     payload: {},
//   };
// };

export const apiOtpError = error => {
  return {
    type: OTP_API_ERROR,
    payload: error,
  };
};

// export const socialLogin = (data, history, type) => {
//   return {
//     type: SOCIAL_LOGIN,
//     payload: { data, history, type },
//   };
// };

// export const resetLoginFlag = () => {
//   return {
//     type: RESET_LOGIN_FLAG,
//   }
// }
