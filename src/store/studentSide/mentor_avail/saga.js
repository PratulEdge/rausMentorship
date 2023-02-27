import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import 'react-toastify/dist/ReactToastify.css';
import { STU_MENTOR_AVAIL } from "./actionTypes";
import { student_Mentor_avail } from "../../../API/student_auth";
import {
  stuMentorAvailSuccess,
  stuMentorAvailApiError
} from "./actions"

function* getStuMentorAvailSess(payload) {
    console.log(payload,"mentor avail inside function")
  try {
    const response = yield call(student_Mentor_avail, payload.payload);
    yield put(stuMentorAvailSuccess(STU_MENTOR_AVAIL, response));
    console.log(response, "response")
  } catch (error) {
    yield put(stuMentorAvailApiError(STU_MENTOR_AVAIL, error));
  }
}

export function* GetStuMentorAvailData() {
  yield takeEvery(STU_MENTOR_AVAIL, getStuMentorAvailSess);
}

function* stuMentorAvailSaga() {
  yield all([
    fork(GetStuMentorAvailData)
  ]);
}

export default stuMentorAvailSaga;