import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MS_STUDENT_LIST } from "./actionTypes";
import { mentorDash } from "../../../API/mentor_auth";
import {
  ms_studentSuccess,
  ms_studentApiError
} from "./actions"

function* get_Ms_Student_List() {
    console.log("inside function")
  try {
    const response = yield call(mentorDash);
    yield put(ms_studentSuccess(MS_STUDENT_LIST, response));
    console.log(response, "response")
  } catch (error) {
    yield put(ms_studentApiError(MS_STUDENT_LIST, error));
  }
}

export function* Get_Ms_Student_Data() {
  yield takeEvery(MS_STUDENT_LIST, get_Ms_Student_List);
}

function* ms_Student_Saga() {
  yield all([
    fork(Get_Ms_Student_Data)
  ]);
}

export default ms_Student_Saga;