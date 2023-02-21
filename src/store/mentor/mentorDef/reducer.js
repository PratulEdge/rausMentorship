import {
  ADD_MENTOR_API_ERROR,
  ADD_MENTOR_SUCCESS,
  ADD_MENTOR_USER,
} from "./actionTypes";

const initialState = {
  error: "",
  loading: false,
  user: null,
};

const addMentor = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MENTOR_USER:
      state = {
        ...state,
        loading: true,
      };
      break;
    case ADD_MENTOR_SUCCESS:
      state = {
        ...state,
        loading: false,
      };
      break;
    case ADD_MENTOR_API_ERROR:
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

export default addMentor;
