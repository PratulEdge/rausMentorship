import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { MS_MENTOR_AVAIL_USER } from "./actionTypes";
import { msMentorAvailApiError, msMentorAvailSuccess } from "./actions";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
import { Ms_MentorAvial } from "../../../API/mentor_auth";

function* msMentorAvailability({ payload: { user, history } }) {
  console.log(user.available_date_time,"in saga")
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "backend") {
      const response = yield call(Ms_MentorAvial, {
        subject_expert: user.category,
        is_active: user.is_active,
        available_date_time: user.available_date_time,
      });
      console.log(response, "create response data")
      if (response.type === "success") {
        Swal.fire({
          icon: 'success',
          title: 'Great!',
          text: 'Successfully Created Availability!',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          window.location.href = "/ms_mentor_availability";
        });
      } 
      else {
        yield put(msMentorAvailApiError(response));
        toast.error("Date Time must be unique", { autoClose: 3000 });
      }
    }
  } catch (error) {
    yield put(msMentorAvailApiError(error));
    toast.error("Date Time must be unique", { autoClose: 3000 });
  }
}

function* msMentorAvailAuthSaga() {
  yield takeEvery(MS_MENTOR_AVAIL_USER, msMentorAvailability);
}

export default msMentorAvailAuthSaga;
