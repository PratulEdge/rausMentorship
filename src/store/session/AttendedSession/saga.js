import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import 'react-toastify/dist/ReactToastify.css';
import { A_SESSION } from "./actionTypes";
import {
  A_SessionsSuccess,
  A_SessionsApiError
} from "./actions"
import { AttendantSession } from "../../../API/auth"

function* get_A_Session() {
    console.log("inside function")
  try {
    const response = yield call(AttendantSession);
    yield put(A_SessionsSuccess(A_SESSION, response));
    console.log(response, "response")
  } catch (error) {
    yield put(A_SessionsApiError(A_SESSION, error));
  }
}

export function* Get_A_SessionData() {
  yield takeEvery(A_SESSION, get_A_Session);
}

function* A_SessionSaga() {
  yield all([
    fork(Get_A_SessionData)
  ]);
}

export default A_SessionSaga;