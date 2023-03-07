import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import 'react-toastify/dist/ReactToastify.css';
// import { STUDENT_PROFILE } from "./actionTypes";
import { PRE_STUD_REPORT } from "./actionTypes";
import {
  Pre_stud_report_Success,
  Pre_stud_report_ApiError
} from "./actions"
// import { Ms_studentProfile } from "../../../API/mentor_auth";
import { Prelims_Test_Report } from "../../../../API/mentor_auth";
// import { studentProfile } from "../../../API/auth";


function* get_Pre_stud_report(payload) {
  console.log(payload.payload ,"student report id inside function")
    console.log("inside function")
  try {
    const { email, examType, id } = payload.payload;
    const response = yield call(Prelims_Test_Report, id,email,examType); //payload.payload.id
    yield put(Pre_stud_report_Success(PRE_STUD_REPORT, response));
    console.log(response, "response")
  } catch (error) {
    yield put(Pre_stud_report_ApiError(PRE_STUD_REPORT, error));
  }
}

export function* get_Pre_stud_reportData() {
  yield takeEvery(PRE_STUD_REPORT, get_Pre_stud_report);
}

function* Pre_stud_report_Saga() {
  yield all([
    fork(get_Pre_stud_reportData)
  ]);
}

export default Pre_stud_report_Saga;