import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import 'react-toastify/dist/ReactToastify.css';
import { STUDENT_PAST_SESS } from "./actionTypes";
import { studentSessions } from "../../../API/student_auth";
import {
    studentPastSessSuccess,
    studentPastSessApiError
} from "./actions"

function* getStudentPastSess() {
    console.log("inside function")
  try {
    const response = yield call(studentSessions);
    yield put(studentPastSessSuccess(STUDENT_PAST_SESS, response));
    console.log(response, "response")
  } catch (error) {
    yield put(studentPastSessApiError(STUDENT_PAST_SESS, error));
  }
}

export function* GetStudentPastSessData() {
  yield takeEvery(STUDENT_PAST_SESS, getStudentPastSess);
}

function* studentPastSessSaga() {
  yield all([
    fork(GetStudentPastSessData)
  ]);
}

export default studentPastSessSaga;