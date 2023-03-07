import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MS_MENTOR_PROFILE } from "./actionTypes";
import { Ms_Mentor_Profile } from "../../../API/mentor_auth";
import {
  ms_mentor_profile_success,
  ms_mentor_profile_ApiError
} from "./actions"

function* getMentor_profile_Dash() {
    console.log("inside function")
  try {
    const response = yield call(Ms_Mentor_Profile);
    yield put(ms_mentor_profile_success(MS_MENTOR_PROFILE, response));
    console.log(response, "response")
  } catch (error) {
    yield put(ms_mentor_profile_ApiError(MS_MENTOR_PROFILE, error));
  }
}

export function* GetMentor_profile_Data() {
  yield takeEvery(MS_MENTOR_PROFILE, getMentor_profile_Dash);
}

function* mentor_profile_Saga() {
  yield all([
    fork(GetMentor_profile_Data)
  ]);
}

export default mentor_profile_Saga;