import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import 'react-toastify/dist/ReactToastify.css';
import { MS_SESSION_DETAIL } from "./actionTypes";
import {
  ms_detailSessionsSuccess,
  ms_detailSessionsApiError
} from "./actions"
import { Ms_SessionsDetail } from "../../../API/mentor_auth";

function* ms_getDetailSession(payload) {
  console.log(payload.payload.id ,"Session Detail inside function")
  try {
    const response = yield call(Ms_SessionsDetail,payload.payload.id);
    yield put(ms_detailSessionsSuccess(MS_SESSION_DETAIL, response));
    console.log(response, "response")
  } catch (error) {
    yield put(ms_detailSessionsApiError(MS_SESSION_DETAIL, error));
  }
}

export function* Get_Ms_DetailSessionData() {
  yield takeEvery(MS_SESSION_DETAIL, ms_getDetailSession);
}

function* Ms_DetailSessionSaga() {
  yield all([
    fork(Get_Ms_DetailSessionData)
  ]);
}

export default Ms_DetailSessionSaga;