import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { RESEND_OTP, LOGOUT_USER, SOCIAL_LOGIN } from "./actionTypes";
import { resendOtpApiError, resendOtpSuccess } from "./actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { resendOtp } from "../../../API/auth";


function* OtpResendUser({ payload: { user, history } }) {
  console.log("in saga value")
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "backend") {
      const response = yield call(resendOtp, {
        email: localStorage.getItem('email'),
      });
      console.log(response, "response value")
      if (response.type === "success") {
        history.push("/otp-auth");
      } else {
        yield put(resendOtpApiError(response));
        toast.error("Enter a valid email address.", { autoClose: 3000 });
      }
    }
  } catch (error) {
    yield put(resendOtpApiError(error));
  }
}

function* OtpResendUserauthSaga() {
  yield takeEvery(RESEND_OTP, OtpResendUser);
}

export default OtpResendUserauthSaga;
