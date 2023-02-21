import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { MENTOR_AVAIL_USER } from "./actionTypes";
import { mentorAvailApiError, mentorAvailSuccess } from "./actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postJwtLogin,
} from "../../../helpers/fakebackend_helper";
import { mentorAvail } from "../../../API/auth";

const fireBaseBackend = getFirebaseBackend();

function* mentorAvailability({ payload: { user, history } }) {
  console.log(user, "test user")
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.loginUser,
        user.email,
        user.password
      );
      yield put(mentorAvailSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtLogin, {
        email: user.email,
        password: user.password,
      });
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(mentorAvailSuccess(response));


    } else if (process.env.REACT_APP_DEFAULTAUTH === "backend") {
      const response = yield call(mentorAvail, {
        mentor_id: user.mentor_id,
        available_date_time: user.available_date_time,
        is_active: user.is_active,
      });
      console.log(response.type, "response Status")
      if (response.type == "success") {
        toast.success("Availability Added Sucessfully", { autoClose: 3000 });
        // history.push("/mentor-list");
      } else {
        yield put(mentorAvailApiError(response));
        console.log(response, "error Reponse")
        toast.error("mentor name required", { autoClose: 3000 });
        // history.push("/mentor-list");
      }
    }
  } catch (error) {
    yield put(mentorAvailApiError(error));
    toast.error("mentor name required", { autoClose: 3000 });
    
  }
}

function* mentorAvailAuthSaga() {
  yield takeEvery(MENTOR_AVAIL_USER, mentorAvailability);
}

export default mentorAvailAuthSaga;

//call api using axios