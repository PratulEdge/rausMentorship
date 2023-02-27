import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { STU_BOOK_SESSION } from "./actionTypes";
import { sessionBookingApiError, sessionBookingSuccess } from "./actions";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper";
import { sessionBook } from "../../../API/auth";

const fireBaseBackend = getFirebaseBackend();

function* sessionBooking({ payload: { user, history } }) {
  console.log(user, "session booking user")
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.loginUser,
        user.email,
        user.password
      );
      yield put(sessionBookingSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtLogin, {
        email: user.email,
        password: user.password,
      });
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(sessionBookingSuccess(response));

      
    } else if (process.env.REACT_APP_DEFAULTAUTH === "backend") {
      const response = yield call(sessionBook, {
        subject_expert:user.subject_expert ,
        mentor_id: user.mentor_id,
        student_id: user.student_id,
        schedule_date_time: user.available_date_time,
        remarks: user.remarks,
      });
      console.log(response, "create response data")
      if (response.type == "success") {
        history.push("/session-list");
        toast.success("Session Booked Successfully", { autoClose: 3000 });
      } else {
        yield put(sessionBookingApiError(response));
        // console.log(response.detail?.email[0],"error message of create")
        toast.error(`${response.detail?.msg}`, { autoClose: 3000 });
        history.push("/session-list");
      }
    }
  } catch (error) {
    yield put(sessionBookingApiError(error));
    // toast.error(`${response.detail?.email[0]}`, { autoClose: 3000 });
  }
}

function* sessionBookAuthSaga() {
  yield takeEvery(STU_BOOK_SESSION , sessionBooking);
}

export default sessionBookAuthSaga;
