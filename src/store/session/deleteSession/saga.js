import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { DELETE_SESSION } from "./actionTypes";
import { deleteSessionApiError, deleteSessionSuccess } from "./actions";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper";
import { SessionsDelete } from "../../../API/auth";
import { mentorCreate } from "../../../API/auth";

const fireBaseBackend = getFirebaseBackend();

function* sessionDelete({ payload: { user, history } }) {
  console.log(user, "delete session user data")
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.loginUser,
        user.email,
        user.password
      );
      yield put(deleteSessionSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtLogin, {
        email: user.email,
        password: user.password,
      });
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(deleteSessionSuccess(response));

      
    } else if (process.env.REACT_APP_DEFAULTAUTH === "backend") {
      const response = yield call(SessionsDelete, {
        session_id: user.session_id,
        cancel_reason: user.cancel_reason,
        status: user.status,
      });
      console.log(response, "create response data")
      if (response.type == "success") {
        toast.success("Session Deleted Successfully", { autoClose: 3000 });
      } else {
        yield put(deleteSessionApiError(response));
        toast.error("Cancellation Reason is required", { autoClose: 3000 });
      }
    }
  } catch (error) {
    yield put(deleteSessionApiError(error));
    // toast.error(`${response.detail?.email[0]}`, { autoClose: 3000 });
  }
}

function* deleteSessionAuthSaga() {
  yield takeEvery(DELETE_SESSION , sessionDelete);
}

export default deleteSessionAuthSaga;
