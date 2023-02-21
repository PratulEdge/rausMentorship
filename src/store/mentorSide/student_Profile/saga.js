import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import 'react-toastify/dist/ReactToastify.css';
// import { STUDENT_PROFILE } from "./actionTypes";
import { MS_STUDENT_PROFILE } from "./actionTypes";
import {
  Ms_studentProfileSuccess,
  Ms_studentProfileApiError
} from "./actions"
import { Ms_studentProfile } from "../../../API/mentor_auth";
import { studentProfile } from "../../../API/auth";


function* Ms_getStudentProfile(payload) {
  console.log(payload.payload.id ,"student id inside function")
    console.log("inside function")
  try {
    const response = yield call(Ms_studentProfile, payload.payload.id); //payload.payload.id
    yield put(Ms_studentProfileSuccess(MS_STUDENT_PROFILE, response));
    console.log(response, "response")
  } catch (error) {
    yield put(Ms_studentProfileApiError(MS_STUDENT_PROFILE, error));
  }
}

export function* Ms_GetStudentProfileData() {
  yield takeEvery(MS_STUDENT_PROFILE, Ms_getStudentProfile);
}

function* Ms_studentProfileSaga() {
  yield all([
    fork(Ms_GetStudentProfileData)
  ]);
}

export default Ms_studentProfileSaga;