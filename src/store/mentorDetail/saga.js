import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Ecoomerce Redux States
// import { MENTOR_DETAIL } from "./actionType";

import { MENTOR_DETAIL } from "./actionTypes";

// import {
//   mailApiResponseSuccess,
//   mailApiResponseError,
// } from "./action";

import {
    mentorDetailSuccess,
    mentorApiError
} from "./actions"


//Include Both Helper File with needed methods
import {
    mentorLsit
} from '../../API/auth'

// import {
//   getMailDetails as getMailDetailsApi,
//   deleteMail as deleteMailApi,
// } from "../../helpers/fakebackend_helper";

function* getMentorDetail() {
    console.log("inside function")
  try {
    const response = yield call(mentorLsit);
    yield put(mentorDetailSuccess(MENTOR_DETAIL, response));
    console.log(response, "response")
  } catch (error) {
    yield put(mentorApiError(MENTOR_DETAIL, error));
  }
}

export function* GetMentorDetailData() {
  yield takeEvery(MENTOR_DETAIL, getMentorDetail);
}

function* mentorDetailSaga() {
  yield all([
    fork(GetMentorDetailData)
  ]);
}

export default mentorDetailSaga;