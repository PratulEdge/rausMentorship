import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { MS_EDIT_MENTOR_PROFILE } from "./actionTypes";
import { msMentorEditProfileApiError, msMentorEditProfileSuccess } from "./actions";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper";
import { editMentorProfile } from "../../../API/auth";
import { Ms_Edit_Mentor_Profile_value } from "../../../API/mentor_auth";

const fireBaseBackend = getFirebaseBackend();

function* Ms_Edit_Mentor_Profile({ payload: { user, history, id } }) {
  console.log(user,"inside Edit function")
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "backend") {
      console.log("hehehehehe")
      const response = yield call(Ms_Edit_Mentor_Profile_value,id, {
        name: user.name,
        email:user.email,
        mobile:user.mobile,        
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
        Swal.fire({
          icon: 'success',
          title: 'Great!',
          text: 'Successfully Created Master Session!',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          window.location.href = "/profile-page";
        });
      } else {
        console.log("error")
        yield put(msMentorEditProfileApiError(response));
      }
    }
  } catch (error) {
    yield put(msMentorEditProfileApiError(error));
  }
}

function* Ms_Edit_Mentor_Profile_AuthSaga() {
  yield takeEvery(MS_EDIT_MENTOR_PROFILE , Ms_Edit_Mentor_Profile);
}

export default Ms_Edit_Mentor_Profile_AuthSaga;
