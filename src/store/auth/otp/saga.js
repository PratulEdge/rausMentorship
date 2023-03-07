import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Login Redux States
import { OTP_VERIFY, OTP_VERIFY_SUCCESS, LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN } from "./actionTypes";
import { apiOtpError, loginSuccess, logoutUserSuccess, otpverifysuccess, } from "./actions";

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper";

import { login } from "../../../API/auth";
import { otp_verify } from "../../../API/auth";

const fireBaseBackend = getFirebaseBackend();

function* otpverify({ payload: { user, history } }) {
  console.log(user, "user Vlaue")
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "backend") {
      console.log(user, "saga otp inSide function")
      if (user.mobile) {
        const response = yield call(otp_verify, {
          mobile: user.mobile,
          token: user.token,
        });
        if (response.type === "success" && response.user_type === 1) {
          history.push("/student-dashboard");
          document.location.reload()
        } else if (response.type === "success" && response.user_type === 2) {
          history.push("/dashboard");
          document.location.reload()
        } else if (response.type === "success" && response.user_type === 3) {
          history.push("/mentor-dashboard");
          document.location.reload()
        } else {
          yield put(apiError(response));
        }

      } else {
        const response = yield call(otp_verify, {
          email: user.email,
          token: user.token,
        });
        if (response.type === "success" && response.user_type === 1) {
          history.push("/student-dashboard");
          document.location.reload()
        } else if (response.type === "success" && response.user_type === 2) {
          history.push("/dashboard");
          document.location.reload()
        } else if (response.type === "success" && response.user_type === 3) {
          history.push("/mentor-dashboard");
          document.location.reload()
        } else {
          yield put(apiError(response));
        }
      }
    }
  } catch (error) {
    yield put(apiOtpError(error));
    toast.error("Invalid OTP.", { autoClose: 3000 });
  }
}

function* authSaga() {
  yield takeEvery(OTP_VERIFY, otpverify);
  // yield takeLatest(SOCIAL_LOGIN, socialLogin);
  // yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
