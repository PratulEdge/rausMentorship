import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import 'react-toastify/dist/ReactToastify.css';
// import { STUDENT_PROFILE } from "./actionTypes";
import { PRE_TEST_SERIES } from "./actionTypes";
import {
  preTestSeriesSuccess,
  preTestSeriesApiError
} from "./actions"
// import { Ms_studentProfile } from "../../../API/mentor_auth";
// import { studentProfile } from "../../../API/auth";
import { Prelims_series } from "../../../../API/mentor_auth";


function* Ms_getPreTestSeries(payload) {
  console.log( payload.payload.email, payload.payload.examType ,"student id inside function exam type")
    console.log(payload.payload,"inside function")
  try {
    const { email, examType } = payload.payload;
    const response = yield call(Prelims_series, email, examType); //payload.payload.id
    yield put(preTestSeriesSuccess(PRE_TEST_SERIES, response));
    console.log(response, "response")
  } catch (error) {
    yield put(preTestSeriesApiError(PRE_TEST_SERIES, error));
  }
}

export function* Ms_GetPreTestSeriesData() {
  yield takeEvery(PRE_TEST_SERIES, Ms_getPreTestSeries);
}

function* Ms_preTestSeriesSaga() {
  yield all([
    fork(Ms_GetPreTestSeriesData)
  ]);
}

export default Ms_preTestSeriesSaga;