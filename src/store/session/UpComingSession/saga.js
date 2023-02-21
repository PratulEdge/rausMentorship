import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import 'react-toastify/dist/ReactToastify.css';
import { UC_SESSION } from "./actionTypes";
import {
  UC_SessionsSuccess,
  UC_SessionsApiError
} from "./actions"
import { UpComingSession } from "../../../API/auth"

function* get_UC_Session() {
    console.log("inside function")
  try {
    const response = yield call(UpComingSession);
    yield put(UC_SessionsSuccess(UC_SESSION, response));
    console.log(response, "response")
  } catch (error) {
    yield put(UC_SessionsApiError(UC_SESSION, error));
  }
}

export function* Get_UC_SessionData() {
  yield takeEvery(UC_SESSION, get_UC_Session);
}

function* UC_SessionSaga() {
  yield all([
    fork(Get_UC_SessionData)
  ]);
}

export default UC_SessionSaga;