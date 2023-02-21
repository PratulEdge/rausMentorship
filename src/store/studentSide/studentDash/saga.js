import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { STUDENT_DASH_DETAIL } from "./actionTypes";
import { studentDash } from "../../../API/student_auth";
import {
    studentDashSuccess,
    studentDashApiError
} from "./actions"

function* getStudentDash() {
    console.log("inside function")
  try {
    const response = yield call(studentDash);
    yield put(studentDashSuccess(STUDENT_DASH_DETAIL, response));
    console.log(response, "response")
  } catch (error) {
    yield put(studentDashApiError(STUDENT_DASH_DETAIL, error));
  }
}

export function* GetStudentDashData() {
  yield takeEvery(STUDENT_DASH_DETAIL, getStudentDash);
}

function* studentDashSaga() {
  yield all([
    fork(GetStudentDashData)
  ]);
}

export default studentDashSaga;