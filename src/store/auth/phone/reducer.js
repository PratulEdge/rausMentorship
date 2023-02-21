import {
  PHONE_LOGIN_USER,
  PHONE_LOGIN_SUCCESS,
  PHONE_LOGOUT_USER,
  PHONE_LOGOUT_USER_SUCCESS,
  PHONE_API_ERROR,
} from "./actionTypes";

const initialState = {
  error: "",
  loading: false,
};

const phoneLogin = (state = initialState, action) => {
  switch (action.type) {
    case PHONE_LOGIN_USER:
      state = {
        ...state,
        loading: true,
      };
      break;
    case PHONE_LOGIN_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case PHONE_LOGOUT_USER:
      state = { ...state, isUserLogout: false };
      break;
    case PHONE_LOGOUT_USER_SUCCESS:
      state = { ...state, isUserLogout: true };
      break;
    case PHONE_API_ERROR:
      state = {
        ...state,
        error: action.payload.data,
        loading: false,
        isUserLogout: false,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default phoneLogin;
