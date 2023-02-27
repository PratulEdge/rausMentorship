import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import 'react-toastify/dist/ReactToastify.css';
import { STU_SUBJECT_EXPERT } from "./actionTypes";
import { student_Subject_expert } from "../../../API/student_auth";
import {
  stuSubjectExpertSuccess,
  stuSubjectExpertApiError
} from "./actions"

function* getStuSubjectExpertSess() {
    console.log("inside function")
  try {
    const response = yield call(student_Subject_expert);
    yield put(stuSubjectExpertSuccess(STU_SUBJECT_EXPERT, response));
    console.log(response, "response")
  } catch (error) {
    yield put(stuSubjectExpertApiError(STU_SUBJECT_EXPERT, error));
  }
}

export function* GetStuSubjectExpertData() {
  yield takeEvery(STU_SUBJECT_EXPERT, getStuSubjectExpertSess);
}

function* stuSubjectExpertSaga() {
  yield all([
    fork(GetStuSubjectExpertData)
  ]);
}

export default stuSubjectExpertSaga;