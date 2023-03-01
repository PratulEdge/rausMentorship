import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { RESEND_OTP, LOGOUT_USER, SOCIAL_LOGIN } from "./actionTypes";
import { resendOtpApiError, resendOtpSuccess } from "./actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper";
import { resendOtp } from "../../../API/auth";

const fireBaseBackend = getFirebaseBackend();

function* OtpResendUser({ payload: { user, history } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.loginUser,
        user.email,
        user.password
      );
      yield put(resendOtpSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtLogin, {
        email: user.email,
        password: user.password,
      });
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(resendOtpSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "backend") {
      const response = yield call(resendOtp, { 
        email: localStorage.getItem('email'),
      });
      if (response.type === "success") {
        history.push("/otp-auth");
      } else {
        yield put(resendOtpApiError(response));
      }
    }
  } catch (error) {
    yield put(resendOtpApiError(error));
    toast.error("Enter a valid email address.", { autoClose: 3000 });
  }
}

function* OtpResendUserauthSaga() {
  yield takeEvery(RESEND_OTP, OtpResendUser);
}

export default OtpResendUserauthSaga;
