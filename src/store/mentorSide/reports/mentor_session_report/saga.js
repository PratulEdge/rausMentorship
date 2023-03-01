import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import 'react-toastify/dist/ReactToastify.css';
// import { STUDENT_PROFILE } from "./actionTypes";
import { MENTOR_SESSION_REPORT } from "./actionTypes";
import {
  Mnt_Sess_report_Success,
  Mnt_Sess_report_ApiError
} from "./actions"
// import { Ms_studentProfile } from "../../../API/mentor_auth";
// import { Prelims_Test_Report } from "../../../../API/mentor_auth";
import { Mentor_Session_Report } from "../../../../API/mentor_auth";

// import { studentProfile } from "../../../API/auth";


function* get_Mnt_Sess_report(payload) {
  // console.log(payload.payload.id ,"student report id inside function")
    console.log("inside function")
  try {
    const response = yield call(Mentor_Session_Report); //payload.payload.id
    yield put(Mnt_Sess_report_Success(MENTOR_SESSION_REPORT, response));
    console.log(response, "response")
  } catch (error) {
    yield put(Mnt_Sess_report_ApiError(MENTOR_SESSION_REPORT, error));
  }
}

export function* get_Mnt_Sess_reportData() {
  yield takeEvery(MENTOR_SESSION_REPORT, get_Mnt_Sess_report);
}

function* Mnt_Sess_report_Saga() {
  yield all([
    fork(get_Mnt_Sess_reportData)
  ]);
}

export default Mnt_Sess_report_Saga;