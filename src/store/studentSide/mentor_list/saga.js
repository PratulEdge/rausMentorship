import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import 'react-toastify/dist/ReactToastify.css';
import { STU_MENTOR_LIST } from "./actionTypes";
import { student_Mentor_List } from "../../../API/student_auth";
import {
  stuMentorListSuccess,
  stuMentorListApiError
} from "./actions"

function* getStuMentorListSess() {
    console.log("inside function")
  try {
    const response = yield call(student_Mentor_List);
    yield put(stuMentorListSuccess(STU_MENTOR_LIST, response));
    console.log(response, "response")
  } catch (error) {
    yield put(stuMentorListApiError(STU_MENTOR_LIST, error));
  }
}

export function* GetStuMentorListData() {
  yield takeEvery(STU_MENTOR_LIST, getStuMentorListSess);
}

function* stuMentorListSaga() {
  yield all([
    fork(GetStuMentorListData)
  ]);
}

export default stuMentorListSaga;