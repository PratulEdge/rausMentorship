import {
    MENTOR_SESSION_DASH,
    MENTOR_SESSION_DASH_SUCCESS,
    MENTOR_SESSION_DASH_API_ERROR
} from "./actionTypes";

const INIT_STATE = {
    mentorSessData: [],
};

const MentorSessData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case MENTOR_SESSION_DASH_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case MENTOR_SESSION_DASH:
                    return {
                        ...state,
                        mentorSessData: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case MENTOR_SESSION_DASH_API_ERROR:
            switch (action.payload.actionType) {
                case MENTOR_SESSION_DASH:
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

export default MentorSessData;