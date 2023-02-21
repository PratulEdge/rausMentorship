import {
  OTP_VERIFY,
  OTP_VERIFY_SUCCESS,
  OTP_API_ERROR,
} from "./actionTypes";

const initialState = {
  error: "",
  loading: false,
};

const otp = (state = initialState, action) => {
  switch (action.type) {
    case OTP_VERIFY:
      state = {
        ...state,
        loading: true,
      };
      break;
    case OTP_VERIFY_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case OTP_API_ERROR:
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

export default otp;
