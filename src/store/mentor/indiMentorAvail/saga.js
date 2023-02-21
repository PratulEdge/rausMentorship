import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { INDI_MENTOR_AVAIL } from "./actionTypes";
import {
  indiMentorAvailSuccess,
  indiMentorAvailApiError
} from "./actions"
import { individualMentorAvail } from "../../../API/auth";

function* getIndiMentorAvailDetail(payload) {
    console.log("inside function")
  try {
    const response = yield call(individualMentorAvail, payload.payload);
    yield put(indiMentorAvailSuccess(INDI_MENTOR_AVAIL, response));
    console.log(response, "individual session data response")
  } catch (error) {
    yield put(indiMentorAvailApiError(INDI_MENTOR_AVAIL, error));
  }
}

export function* GetIndiMentorAvailData() {
  yield takeEvery(INDI_MENTOR_AVAIL, getIndiMentorAvailDetail);
}

function* IndiMentorAvailSaga() {
  yield all([
    fork(GetIndiMentorAvailData)
  ]);
}

export default IndiMentorAvailSaga;