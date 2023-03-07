import {
  RESEND_OTP,
  RESEND_OTP_SUCCESS,
  RESEND_OTP_API_ERROR,
} from "./actionTypes";

export const resendOtp = (user, history) => {
  console.log(user, "sadsdsdsdsd")
  return {
    type: RESEND_OTP,
    payload: { user, history },
  };
};

export const resendOtpSuccess = user => {
  console.log(user, "sadsdsdsdsd12")
  return {
    type: RESEND_OTP_SUCCESS,
    payload: user,
  };
};

export const resendOtpApiError = error => {
  console.log("sadsdsdsdsd32")
  return {
    type: RESEND_OTP_API_ERROR,
    payload: error,
  };
};
