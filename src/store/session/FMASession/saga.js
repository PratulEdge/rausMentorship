import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import 'react-toastify/dist/ReactToastify.css';
import { MENTOR_ASSIGNED_SESSION } from "./actionTypes";
import {
  mentorSessionSuccess,
    mentorSessionApiError
} from "./actions"
import { MentorAssignedSessions } from '../../../API/auth'

function* getMentorAssignedSession(payload) {
    console.log(payload.payload.id ,"inside function session")
  try {
    const response = yield call(MentorAssignedSessions, payload.payload.id);
    yield put(mentorSessionSuccess(MENTOR_ASSIGNED_SESSION, response));
    console.log(response, "response")
  } catch (error) {
    yield put(mentorSessionApiError(MENTOR_ASSIGNED_SESSION, error));
  }
}

export function* GetMentorAssignedSessionData() {
  yield takeEvery(MENTOR_ASSIGNED_SESSION, getMentorAssignedSession);
}

function* mentorAssignedSessionSaga() {
  yield all([
    fork(GetMentorAssignedSessionData)
  ]);
}

export default mentorAssignedSessionSaga;