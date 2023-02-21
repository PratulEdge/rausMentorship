import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { MENTOR_CREATE_USER } from "./actionTypes";
import { mentorCreateApiError, mentorCreateSuccess } from "./actions";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper";
import { mentorCreate } from "../../../API/auth";

const fireBaseBackend = getFirebaseBackend();

function* mentorCreates({ payload: { user, history } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.loginUser,
        user.email,
        user.password
      );
      yield put(mentorCreateSuccess(response));
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtLogin, {
        email: user.email,
        password: user.password,
      });
      sessionStorage.setItem("authUser", JSON.stringify(response));
      yield put(mentorCreateSuccess(response));

      
    } else if (process.env.REACT_APP_DEFAULTAUTH === "backend") {
      const response = yield call(mentorCreate, {
        email: user.email,
        name: user.name,
        mobile: user.mobile,
      });
      console.log(response, "create response data")
      if (response.type == "success") {
        history.push("/mentor-list");
        toast.success("Mentor Added Successfully", { autoClose: 3000 });
      } else {
        yield put(mentorCreateApiError(response));
        console.log(response.detail?.email[0],"error message of create")
        toast.error(`${response.detail?.email[0]}`, { autoClose: 3000 });
        history.push("/mentor-list");
      }
    }
  } catch (error) {
    yield put(mentorCreateApiError(error));
    // toast.error(`${response.detail?.email[0]}`, { autoClose: 3000 });
  }
}

function* mentorCreateAuthSaga() {
  yield takeEvery(MENTOR_CREATE_USER , mentorCreates);
}

export default mentorCreateAuthSaga;
