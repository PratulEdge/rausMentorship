import {
  MS_EDIT_MENTOR_PROFILE_API_ERROR,
  MS_EDIT_MENTOR_PROFILE_SUCCESS,
  MS_EDIT_MENTOR_PROFILE,
} from "./actionTypes";

const initialState = {
  error: "",
  loading: false,
  user: null,
};

const msMentorEditProfileData = (state = initialState, action) => {
  switch (action.type) {
    case MS_EDIT_MENTOR_PROFILE:
      state = {
        ...state,
        loading: true,
      };
      break;
    case MS_EDIT_MENTOR_PROFILE_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case MS_EDIT_MENTOR_PROFILE_API_ERROR:
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

export default msMentorEditProfileData;
