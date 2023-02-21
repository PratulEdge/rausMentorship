import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import 'react-toastify/dist/ReactToastify.css';
import { SESSION_DETAIL } from "./actionTypes";
import {
  detailSessionsSuccess,
    detailSessionsApiError
} from "./actions"
import { SessionsDetail } from "../../../API/auth";

function* getDetailSession(payload) {
  console.log(payload.payload.id ,"Session Detail inside function")
  try {
    const response = yield call(SessionsDetail,payload.payload.id);
    yield put(detailSessionsSuccess(SESSION_DETAIL, response));
    console.log(response, "response")
  } catch (error) {
    yield put(detailSessionsApiError(SESSION_DETAIL, error));
  }
}

export function* GetDetailSessionData() {
  yield takeEvery(SESSION_DETAIL, getDetailSession);
}

function* DetailSessionSaga() {
  yield all([
    fork(GetDetailSessionData)
  ]);
}

export default DetailSessionSaga;