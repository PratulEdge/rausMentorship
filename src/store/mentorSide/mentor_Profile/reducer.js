import {
    MS_MENTOR_PROFILE,
    MS_MENTOR_PROFILE_SUCCESS,
    MS_MENTOR_PROFILE_API_ERROR
} from "./actionTypes";

const INIT_STATE = {
    ms_mentor_profile_Data: [],
};

const Ms_mentor_profile_Data = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case MS_MENTOR_PROFILE_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case MS_MENTOR_PROFILE:
                    return {
                        ...state,
                        ms_mentor_profile_Data: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case MS_MENTOR_PROFILE_API_ERROR:
            switch (action.payload.actionType) {
                case MS_MENTOR_PROFILE:
                    return {
                        ...state,
                        error: action.payload.error,
                        isLoader: true
                    };
                default:
                    return { ...state };
            }
        default:
            return state
    }
};

export default Ms_mentor_profile_Data;