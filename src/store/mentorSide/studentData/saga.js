import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { STUDENT_DATA } from "./actionTypes";
import { studentData } from "../../../API/mentor_auth";
import {
  studDataSuccess,
  studDataApiError
} from "./actions"

function* getStudData() {
    console.log("inside function")
  try {
    const response = yield call(studentData);
    yield put(studDataSuccess(STUDENT_DATA, response));
    console.log(response, "response")
  } catch (error) {
    yield put(studDataApiError(STUDENT_DATA, error));
  }
}

export function* GetStudData() {
  yield takeEvery(STUDENT_DATA, getStudData);
}

function* studSaga() {
  yield all([
    fork(GetStudData)
  ]);
}

export default studSaga;