import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import 'react-toastify/dist/ReactToastify.css';
import { T_SESSION } from "./actionTypes";
import {
  todaySessionsSuccess,
  todaySessionsApiError
} from "./actions"
import { TodaySession } from "../../../API/auth";

function* get_T_Session() {
    console.log("inside function")
  try {
    const response = yield call(TodaySession);
    yield put(todaySessionsSuccess(T_SESSION, response));
    console.log(response, "response")
  } catch (error) {
    yield put(todaySessionsApiError(T_SESSION, error));
  }
}

export function* Get_T_SessionData() {
  yield takeEvery(T_SESSION, get_T_Session);
}

function* T_SessionSaga() {
  yield all([
    fork(Get_T_SessionData)
  ]);
}

export default T_SessionSaga;