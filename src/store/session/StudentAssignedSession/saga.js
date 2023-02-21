import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import 'react-toastify/dist/ReactToastify.css';
import { STUDENT_ASSIGNED_SESSION } from "./actionTypes";
import {
  studentSessionSuccess,
    studentSessionApiError
} from "./actions"
import { StudentAssignedSessions } from "../../../API/auth";
import { MentorAssignedSessions } from '../../../API/auth'

function* getStudentAssignedSession(payload) {
    console.log(payload.payload.id ,"inside function session")
  try {
    const response = yield call(StudentAssignedSessions, payload.payload.id);
    yield put(studentSessionSuccess(STUDENT_ASSIGNED_SESSION, response));
    console.log(response, "response")
  } catch (error) {
    yield put(studentSessionApiError(STUDENT_ASSIGNED_SESSION, error));
  }
}

export function* GetStudentAssignedSessionData() {
  yield takeEvery(STUDENT_ASSIGNED_SESSION, getStudentAssignedSession);
}

function* studentAssignedSessionSaga() {
  yield all([
    fork(GetStudentAssignedSessionData)
  ]);
}

export default studentAssignedSessionSaga;