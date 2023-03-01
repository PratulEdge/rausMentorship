import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import 'react-toastify/dist/ReactToastify.css';
// import { STUDENT_PROFILE } from "./actionTypes";
import { PRE_TEST_LIST } from "./actionTypes";
import {
  preTestListSuccess,
  preTestListApiError
} from "./actions"
// import { Ms_studentProfile } from "../../../API/mentor_auth";
// import { studentProfile } from "../../../API/auth";
// import { Prelims_series } from "../../../../API/mentor_auth";
import { Prelims_Test_List } from "../../../../API/mentor_auth";


function* Ms_getPreTestList(payload) {
  console.log(payload.payload.actionType ,"student id inside function")
    console.log("inside function")
  try {
    const response = yield call(Prelims_Test_List); //payload.payload.id
    yield put(preTestListSuccess(PRE_TEST_LIST, response));
    console.log(response, "response")
  } catch (error) {
    yield put(preTestListApiError(PRE_TEST_LIST, error));
  }
}

export function* Ms_GetPreTestListData() {
  yield takeEvery(PRE_TEST_LIST, Ms_getPreTestList);
}

function* Ms_preTestListSaga() {
  yield all([
    fork(Ms_GetPreTestListData)
  ]);
}

export default Ms_preTestListSaga;