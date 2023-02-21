import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { ADD_MENTOR_USER } from "./actionTypes";
import { addMentorApiError, addMentorSuccess } from "./actions";
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

const fireBaseBackend = getFirebaseBackend();

function* addMentor({ payload: { user, history, id } }) {
  console.log(user,"inside Edit function")
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.loginUser,
        user.email,
        user.password
      );
      yield put(addMentorSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtLogin, {
        email: user.email,
        password: user.password,
      });
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(addMentorSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "backend") {
      console.log("hehehehehe")
      const response = yield call(editMentorProfile,id, {
        subject_expert: user.subject_expert,
        profession: user.profession,
        qualification: user.qualification,
        address_1_line_1: user.address_1_line_1,
        state: user.state,
        city: user.city,
        country: user.country,
        pincode: user.pincode,
        is_active: user.is_active,
      });
      console.log(response, "response value Add Mentor")
      if (response.type == "success") {
        toast.success("Edited Successfully", { autoClose: 1000 });
        history.push(`/mentor-profile-view/${response.detail?.id}`);
      } else {
        console.log("error")
        yield put(addMentorApiError(response));
      }
    }
  } catch (error) {
    yield put(addMentorApiError(error));
  }
}

function* addMentorAuthSaga() {
  yield takeEvery(ADD_MENTOR_USER , addMentor);
}

export default addMentorAuthSaga;
