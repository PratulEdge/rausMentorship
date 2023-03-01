import {
  RESEND_OTP,
  RESEND_OTP_SUCCESS,
  RESEND_OTP_API_ERROR,
} from "./actionTypes";

export const resendOtp = (user, history) => {
  return {
    type: RESEND_OTP,
    payload: { user, history },
  };
};

export const resendOtpSuccess = user => {
  return {
    type: RESEND_OTP_SUCCESS,
    payload: user,
  };
};

export const resendOtpApiError = error => {
  return {
    type: RESEND_OTP_API_ERROR,
    payload: error,
  };
};
