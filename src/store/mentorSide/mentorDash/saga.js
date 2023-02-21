import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MENTOR_DASH_DETAIL } from "./actionTypes";
import { mentorDash } from "../../../API/mentor_auth";
import {
    mentorDashSuccess,
    mentorDashApiError
} from "./actions"

function* getMentorDash() {
    console.log("inside function")
  try {
    const response = yield call(mentorDash);
    yield put(mentorDashSuccess(MENTOR_DASH_DETAIL, response));
    console.log(response, "response")
  } catch (error) {
    yield put(mentorDashApiError(MENTOR_DASH_DETAIL, error));
  }
}

export function* GetMentorDashData() {
  yield takeEvery(MENTOR_DASH_DETAIL, getMentorDash);
}

function* mentorDashSaga() {
  yield all([
    fork(GetMentorDashData)
  ]);
}

export default mentorDashSaga;