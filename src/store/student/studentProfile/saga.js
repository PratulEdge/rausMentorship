import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import 'react-toastify/dist/ReactToastify.css';
// import { STUDENT_PROFILE } from "./actionTypes";
import { STUDENT_PROFILE } from "./actionTypes";
import {
    studentProfileSuccess,
    studentProfileApiError
} from "./actions"
import { studentProfile } from "../../../API/auth";


function* getStudentProfile(payload) {
  console.log(payload.payload.id ,"student id inside function")
    console.log("inside function")
  try {
    const response = yield call(studentProfile,payload.payload.id);
    yield put(studentProfileSuccess(STUDENT_PROFILE, response));
    console.log(response, "response")
  } catch (error) {
    yield put(studentProfileApiError(STUDENT_PROFILE, error));
  }
}

export function* GetStudentProfileData() {
  yield takeEvery(STUDENT_PROFILE, getStudentProfile);
}

function* studentProfileSaga() {
  yield all([
    fork(GetStudentProfileData)
  ]);
}

export default studentProfileSaga;