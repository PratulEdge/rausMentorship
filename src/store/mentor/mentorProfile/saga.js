import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import 'react-toastify/dist/ReactToastify.css';
import { MENTOR_PROFILE } from "./actionTypes";
import {
    mentorProfileSuccess,
    mentorProfileApiError
} from "./actions"
import { mentorProfile } from '../../../API/auth'


function* getMentorProfile(payload) {
    console.log(payload.payload.id ,"inside function")
  try {
    const response = yield call(mentorProfile,payload.payload.id);
    yield put(mentorProfileSuccess(MENTOR_PROFILE, response));
    console.log(response, "response")
  } catch (error) {
    yield put(mentorProfileApiError(MENTOR_PROFILE, error));
  }
}

export function* GetMentorProfileData() {
  yield takeEvery(MENTOR_PROFILE, getMentorProfile);
}

function* mentorProfileSaga() {
  yield all([
    fork(GetMentorProfileData)
  ]);
}

export default mentorProfileSaga;