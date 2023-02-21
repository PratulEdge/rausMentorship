import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Ecoomerce Redux States
// import { MENTOR_DETAIL } from "./actionType";

import { STUDENT_DETAIL } from "./actionTypes";
import { studentDetailSuccess, studentApiError } from "./actions";

//Include Both Helper File with needed methods
import { studentList } from "../../../API/auth";

// import { studentList}
// import {
//   getMailDetails as getMailDetailsApi,
//   deleteMail as deleteMailApi,
// } from "../../helpers/fakebackend_helper";

function* getStudentDetail() {
    console.log("inside function")
  try {
    const response = yield call(studentList);
    yield put(studentDetailSuccess(STUDENT_DETAIL, response));
    console.log(response, "response")
  } catch (error) {
    yield put(studentApiError(STUDENT_DETAIL, error));
  }
}

export function* GetStudentDetailData() {
  yield takeEvery(STUDENT_DETAIL, getStudentDetail);
}

function* studentDetailSaga() {
  yield all([
    fork(GetStudentDetailData)
  ]);
}

export default studentDetailSaga;