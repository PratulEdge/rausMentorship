import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MENTOR_AVAILABILITY } from "./actionTypes";
import { mentorDash } from "../../../API/mentor_auth";
import { Ms_Availability } from "../../../API/mentor_auth";
import {
  mntAvailabilitySuccess,
  mntAvailabilityApiError
} from "./actions"

function* getMentorAvailabilityDash() {
    console.log("inside function")
  try {
    const response = yield call(Ms_Availability);
    yield put(mntAvailabilitySuccess(MENTOR_AVAILABILITY, response));
    console.log(response, "response")
  } catch (error) {
    yield put(mntAvailabilityApiError(MENTOR_AVAILABILITY, error));
  }
}

export function* GetMentorAvailabilityData() {
  yield takeEvery(MENTOR_AVAILABILITY, getMentorAvailabilityDash);
}

function* mentorAvailabilitySaga() {
  yield all([
    fork(GetMentorAvailabilityData)
  ]);
}

export default mentorAvailabilitySaga;