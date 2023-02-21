import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import 'react-toastify/dist/ReactToastify.css';
import { MENTOR_SESSION } from "./actionTypes";
import {
  mentorSessionsSuccess,
    mentorSessionsApiError
} from "./actions"
import { MentorSessions } from "../../../API/auth";

function* getMentorSession() {
    console.log("inside function")
  try {
    const response = yield call(MentorSessions);
    yield put(mentorSessionsSuccess(MENTOR_SESSION, response));
    console.log(response, "response")
  } catch (error) {
    yield put(mentorSessionsApiError(MENTOR_SESSION, error));
  }
}

export function* GetMentorSessionData() {
  yield takeEvery(MENTOR_SESSION, getMentorSession);
}

function* mentorSessionSaga() {
  yield all([
    fork(GetMentorSessionData)
  ]);
}

export default mentorSessionSaga;