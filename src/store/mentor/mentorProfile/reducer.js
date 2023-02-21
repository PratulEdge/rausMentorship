import {
    MENTOR_PROFILE,
    MENTOR_PROFILE_SUCCESS,
    MENTOR_PROFILE_API_ERROR,
} from "./actionTypes";

const INIT_STATE = {
    userData: [],
};

const MentorProfileData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case MENTOR_PROFILE_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case MENTOR_PROFILE:
                    console.log( action, action.payload.id, action.payload.data,"in here 3")

                    return {
                        ...state,
                        userData: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case MENTOR_PROFILE_API_ERROR:
            switch (action.payload.actionType) {
                case MENTOR_PROFILE:
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

export default MentorProfileData;