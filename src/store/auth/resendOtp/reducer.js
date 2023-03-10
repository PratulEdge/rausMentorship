import {
  RESEND_OTP,
  RESEND_OTP_SUCCESS,
  RESEND_OTP_API_ERROR,
} from "./actionTypes";

const initialState = {
  error: "",
  loading: false,
  user: '',
};

const ResendOtpData = (state = initialState, action) => {
  console.log(action.type, "action type value dsadsads")
  switch (action.type) {
    case RESEND_OTP:
      state = {
        ...state,
        loading: true,
      };
      break;
    case RESEND_OTP_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case RESEND_OTP_API_ERROR:
      state = {
        ...state,
        error: action.payload.data,
        loading: false,
        isUserLogout: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default ResendOtpData;
