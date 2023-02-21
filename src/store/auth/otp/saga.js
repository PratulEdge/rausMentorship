import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Login Redux States
import {OTP_VERIFY,OTP_VERIFY_SUCCESS, LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN } from "./actionTypes";
import { apiOtpError, loginSuccess, logoutUserSuccess,  otpverifysuccess, } from "./actions";

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
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.loginUser,
        user.email,
        user.password
      );
      yield put(loginSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtLogin, {
        email: user.email,
        token: user.token,
      });
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "backend") {
      // history.push("/dashboard");
      console.log("saga otp inSide function")
      const response = yield call(otp_verify, {  //login
        email: user.email,
        token: user.token,
        // mobile: user.mobile,
      });
      console.log(response, "local")
      if (response.type === "success" && response.user_type === 1) {
        history.push("/student-dashboard");         
      } else if (response.type === "success" && response.user_type === 2) {
        history.push("/dashboard");        
      } else if(response.type === "success" && response.user_type === 3){
        history.push("/mentor-dashboard");        
      }else{
        yield put(apiError(response));
      }
      // localStorage.setItem("email", response.data.email)
      
      // sessionStorage.setItem("authUser", JSON.stringify(response));
      // history.push("/dashboard");
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
