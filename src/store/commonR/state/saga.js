import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Ecoomerce Redux States
// import { MENTOR_DETAIL } from "./actionType";

import { STATE } from "./actionTypes";

// import {
//   mailApiResponseSuccess,
//   mailApiResponseError,
// } from "./action";

import {
    stateSuccess,
    stateApiError
} from "./actions"


//Include Both Helper File with needed methods
import { selectState } from "../../../API/commonApi";
// import {
//     mentorLsit
// } from '../../API/auth'

// import {
//   getMailDetails as getMailDetailsApi,
//   deleteMail as deleteMailApi,
// } from "../../helpers/fakebackend_helper";

function* getStateDetail() {
    console.log("inside function")
  try {
    const response = yield call(selectState);
    yield put(stateSuccess(STATE, response));
    console.log(response, "response")
  } catch (error) {
    yield put(stateApiError(STATE, error));
  }
}

export function* GetStateDetailData() {
  yield takeEvery(STATE, getStateDetail);
}

function* mentorStateSaga() {
  yield all([
    fork(GetStateDetailData)
  ]);
}

export default mentorStateSaga;