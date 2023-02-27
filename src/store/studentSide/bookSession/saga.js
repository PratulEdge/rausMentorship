import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { BOOK_SESSION } from "./actionTypes";
import { book_SessionsApiError, book_SessionsSuccess } from "./actions";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import { student_Book_Session } from "../../../API/student_auth";

const fireBaseBackend = getFirebaseBackend();

function* book_Sessions({ payload: { user, history, id } }) {
  console.log(user,id,"inside book session function")
  try {
     if (process.env.REACT_APP_DEFAULTAUTH === "backend") {
      console.log("hehehehehe")
      const response = yield call(student_Book_Session, id, {
        is_booked: user.is_booked,
      });
      console.log(response, "response value Edit")
      if (response.type == "success") {
        console.log("submitted book session")
        toast.success("Session Booked Successfully", { autoClose: 3000 });
        history.push("/book-session");
      } else {
        console.log("error")
        yield put(book_SessionsApiError(response));
      }
    }
  } catch (error) {
    yield put(book_SessionsApiError(error));
    toast.error("Session erere Booked Successfully", { autoClose: 3000 });
  }
}

function* book_SessionsAuthSaga() {
  yield takeEvery(BOOK_SESSION , book_Sessions);
}

export default book_SessionsAuthSaga;
