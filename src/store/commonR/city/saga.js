import { call, put, takeEvery, all, fork } from "redux-saga/effects";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Ecoomerce Redux States
// import { MENTOR_DETAIL } from "./actionType";

import { CITY } from "./actionTypes";

// import {
//   mailApiResponseSuccess,
//   mailApiResponseError,
// } from "./action";

import {
    citySuccess,
    cityApiError
} from "./actions"


//Include Both Helper File with needed methods
import { selectCity } from "../../../API/commonApi";
// import {
//     mentorLsit
// } from '../../API/auth'

// import {
//   getMailDetails as getMailDetailsApi,
//   deleteMail as deleteMailApi,
// } from "../../helpers/fakebackend_helper";

function* getCityDetail(payload) {
  try {
    const response = yield call(selectCity, payload.payload);
    yield put(citySuccess(CITY, response));
    console.log(response, "response")
  } catch (error) {
    yield put(cityApiError(CITY, error));
  }
}

export function* GetCityDetailData() {
  yield takeEvery(CITY, getCityDetail);
}

function* mentorCitySaga() {
  yield all([
    fork(GetCityDetailData)
  ]);
}

export default mentorCitySaga;