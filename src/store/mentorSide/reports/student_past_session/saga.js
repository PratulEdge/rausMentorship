import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import 'react-toastify/dist/ReactToastify.css';
// import { STUDENT_PROFILE } from "./actionTypes";
import { STUDENT_PAST_SESSION_DETAIL } from "./actionTypes";
import {
  student_past_session_detail_Success,
  student_past_session_detail_ApiError
} from "./actions"
// import { Ms_studentProfile } from "../../../API/mentor_auth";
// import { studentProfile } from "../../../API/auth";
import { Student_Past_Session_data } from "../../../../API/mentor_auth";


function* get_student_past_session_detail(payload) {
  console.log(payload.payload.id ,"student past id inside function")
    console.log("inside function")
  try {
    const response = yield call(Student_Past_Session_data, payload.payload.id); //payload.payload.id
    yield put(student_past_session_detail_Success(STUDENT_PAST_SESSION_DETAIL, response));
    console.log(response, "response")
  } catch (error) {
    yield put(student_past_session_detail_ApiError(STUDENT_PAST_SESSION_DETAIL, error));
  }
}

export function* get_student_past_session_detail_Data() {
  yield takeEvery(STUDENT_PAST_SESSION_DETAIL, get_student_past_session_detail);
}

function* get_student_past_session_detail_Saga() {
  yield all([
    fork(get_student_past_session_detail_Data)
  ]);
}

export default get_student_past_session_detail_Saga;