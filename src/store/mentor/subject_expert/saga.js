import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Ecoomerce Redux States
// import { SUBJECT_EXPERT } from "./actionType";

import { SUBJECT_EXPERT } from "./actionTypes";

// import {
//   mailApiResponseSuccess,
//   mailApiResponseError,
// } from "./action";

import {
    subjectExpertSuccess,
    subjectExpertApiError
} from "./actions"

// import { subjectExpert } from "../../../API/auth";

import { subjectExpert } from "../../../API/auth";

//Include Both Helper File with needed methods
// import {
//     mentorLsit
// } from '../../API/auth'

// import {
//   getMailDetails as getMailDetailsApi,
//   deleteMail as deleteMailApi,
// } from "../../helpers/fakebackend_helper";

function* getSubjectExpertDetail() {
    console.log("inside function")
  try {
    const response = yield call(subjectExpert);
    yield put(subjectExpertSuccess(SUBJECT_EXPERT, response));
    console.log(response, "Expert data response")
  } catch (error) {
    yield put(subjectExpertApiError(SUBJECT_EXPERT, error));
  }
}

export function* GetSubjectExpertData() {
  yield takeEvery(SUBJECT_EXPERT, getSubjectExpertDetail);
}

function* SubjectExpertSaga() {
  yield all([
    fork(GetSubjectExpertData)
  ]);
}

export default SubjectExpertSaga;