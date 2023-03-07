import {
  MS_EDIT_MENTOR_PROFILE,
  MS_EDIT_MENTOR_PROFILE_SUCCESS,
  MS_EDIT_MENTOR_PROFILE_API_ERROR,
} from "./actionTypes";

export const msMentorEditProfile = (user, history, id) => {
  return {
    type: MS_EDIT_MENTOR_PROFILE,
    payload: { user, history, id },
  };
};

export const msMentorEditProfileSuccess = user => {
  return {
    type: MS_EDIT_MENTOR_PROFILE_SUCCESS,
    payload: user,
  };
};

export const msMentorEditProfileApiError = error => {
  return {
    type: MS_EDIT_MENTOR_PROFILE_API_ERROR,
    payload: error,
  };
};