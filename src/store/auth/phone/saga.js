import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { PHONE_LOGIN_USER, PHONE_LOGOUT_USER } from "./actionTypes";
import { phoneApiError, phoneLoginSuccess, phoneLogoutUserSuccess } from "./actions";

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postJwtLogin,
} from "../../../helpers/fakebackend_helper";
import { phoneLogin } from "../../../API/auth";

const fireBaseBackend = getFirebaseBackend();

function* phoneLoginUser({ payload: { user, history } }) {
  console.log(user,"user mobile value")
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.loginUser,
        user.email,
        user.password
      );
      yield put(phoneLoginSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtLogin, {
        email: user.email,
        password: user.password,
      });
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(phoneLoginSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "backend") {
      const response = yield call(phoneLogin, {
        mobile: user.mobile,
      });
      console.log(response.type, "response value mobile auth")
      if (response.type === "success") { 
        console.log("in response.type")
        window.location.href = '/otp-auth';       
        // history.push("/otp-auth");
        // yield put(push('/otp-auth'));
      } else {
        yield put(phoneApiError(response));
      }
    }
  } catch (error) {
    yield put(phoneApiError(error));
  }
}
function* phoneAuthSaga() {
  yield takeEvery(PHONE_LOGIN_USER, phoneLoginUser);
}

export default phoneAuthSaga;
