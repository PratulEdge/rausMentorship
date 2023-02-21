import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { MENTOR_EDIT_USER } from "./actionTypes";
import { mentorEditApiError, mentorEditSuccess } from "./actions";
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

function* mentorEdit({ payload: { user, history, id } }) {
  console.log(user,"inside Edit function")
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.loginUser,
        user.email,
        user.password
      );
      yield put(mentorEditSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtLogin, {
        email: user.email,
        password: user.password,
      });
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(mentorEditSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "backend") {
      console.log("hehehehehe")
      const response = yield call(editMentorProfile,id, {  //login ,postFakeLogin
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        subject_expert: user.subject_expert,
        profession: user.profession,
        qualification: user.qualification,
        address_1_line_1: user.address_1_line_1,
        pincode: user.pincode,
        is_active: user.is_active,
      });
      console.log(response, "response value Edit")
      if (response.type == "success") {
        toast.success("Edited Successfully", { autoClose: 3000 });
        history.push("/mentor-list");
      } else {
        console.log("error")
        yield put(mentorEditApiError(response));
      }
    }
  } catch (error) {
    yield put(mentorEditApiError(error));
  }
}

function* mentorEditAuthSaga() {
  yield takeEvery(MENTOR_EDIT_USER , mentorEdit);
}

export default mentorEditAuthSaga;
