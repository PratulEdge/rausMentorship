import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER, LOGOUT_USER, SOCIAL_LOGIN } from "./actionTypes";
import { apiError, loginSuccess, logoutUserSuccess } from "./actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper";

import { login } from "../../../API/auth";

const fireBaseBackend = getFirebaseBackend();

function* loginUser({ payload: { user, history } }) {
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
        password: user.password,
      });
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "backend") {
      const response = yield call(login, { 
        email: user.email,
      });
      if (response.type === "success") {
        history.push("/otp-auth");
      } else {
        yield put(apiError(response));
      }
    }
  } catch (error) {
    yield put(apiError(error));
    toast.error("Enter a valid email address.", { autoClose: 3000 });
  }
}

function* logoutUser() {
  try {
    sessionStorage.removeItem("authUser");
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(fireBaseBackend.logout);
      yield put(logoutUserSuccess(LOGOUT_USER, response));
    } else {
      yield put(logoutUserSuccess(LOGOUT_USER, true));
    }
  } catch (error) {
    yield put(apiError(LOGOUT_USER, error));
  }
}

function* socialLogin({ payload: { data, history, type } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend();
      const response = yield call(
        fireBaseBackend.socialLoginUser,
        data,
        type,
      );
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    } else {
      const response = yield call(postSocialLogin, data);
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    }
    history.push("/dashboard");
  } catch (error) {
    yield put(apiError(error));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeLatest(SOCIAL_LOGIN, socialLogin);
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
