import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { MENTOR_CREATE_USER } from "./actionTypes";
import { mentorCreateApiError, mentorCreateSuccess } from "./actions";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


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
    if (process.env.REACT_APP_DEFAULTAUTH === "backend") {
      const response = yield call(mentorCreate, {
        email: user.email,
        name: user.name,
        mobile: user.mobile,
      });
      console.log(response, "create response data")
      if (response.type == "success") {
        console.log('successfully added')
        Swal.fire({
          icon: 'success',
          title: 'Great!',
          text: 'Successfully Created Master Session!',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          window.location.href = "/mentor-list";
        });

      } else {
        yield put(mentorCreateApiError(response));
        if (response.detail.mobile) {
          console.log(response.detail.mobile[0], "test data")
          toast.error(`${response.detail?.mobile[0]}`, { autoClose: 3000 });
        }

        if (response.detail.email) {
          console.log(response.detail.email[0], "test data email")
          toast.error(`${response.detail?.email[0]}`, { autoClose: 3000 });
        }
      }
    }
  } catch (error) {
    yield put(mentorCreateApiError(error));
    console.log(error, "error message of create fdsd")
  }
}

function* mentorCreateAuthSaga() {
  yield takeEvery(MENTOR_CREATE_USER, mentorCreates);
}

export default mentorCreateAuthSaga;
