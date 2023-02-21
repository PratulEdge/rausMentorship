import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MENTOR_SESSION_DASH } from "./actionTypes";
import { mentorSession } from "../../../API/mentor_auth";
import {
    mentorSessSuccess,
    mentorSessApiError
} from "./actions"

function* getMentorSess() {
    console.log("inside function")
  try {
    const response = yield call(mentorSession);
    yield put(mentorSessSuccess(MENTOR_SESSION_DASH, response));
    console.log(response, "response")
  } catch (error) {
    yield put(mentorSessApiError(MENTOR_SESSION_DASH, error));
  }
}

export function* GetMentorSessData() {
  yield takeEvery(MENTOR_SESSION_DASH, getMentorSess);
}

function* mentorSessSaga() {
  yield all([
    fork(GetMentorSessData)
  ]);
}

export default mentorSessSaga;