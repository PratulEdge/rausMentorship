import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { MENTOR_DELETE_USER } from "./actionTypes";
import { mentorDeleteApiError, mentorDeleteSuccess } from "./actions";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper";
import { editMentorProfile } from "../../../API/auth";
import { deleteMentorProfile } from "../../../API/auth";

const fireBaseBackend = getFirebaseBackend();

function* mentorDelete({ payload: { user, history, mentor_id } }) {
  console.log(mentor_id,"inside Edit function")
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.loginUser,
        user.email,
        user.password
      );
      yield put(mentorDeleteSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtLogin, {
        email: user.email,
        password: user.password,
      });
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(mentorDeleteSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "backend") {
      console.log("hehehehehe")
      const response = yield call(deleteMentorProfile,mentor_id, {  //login ,postFakeLogin
        is_active: user.is_active,
      });
      if (response.type == "success") {
        toast.success("Deleted Successfully", { autoClose: 3000 });
        history.push("/mentor-list");
      } else {
        toast.success("Something went Wrong", { autoClose: 3000 });
        yield put(mentorDeleteApiError(response));
      }
    }
  } catch (error) {
    yield put(mentorDeleteApiError(error));
  }
}

function* mentorDeleteAuthSaga() {
  yield takeEvery(MENTOR_DELETE_USER , mentorDelete);
}

export default mentorDeleteAuthSaga;
