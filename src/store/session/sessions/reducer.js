import {
    MENTOR_SESSION,
    MENTOR_SESSION_SUCCESS,
    MENTOR_SESSION_API_ERROR,
} from "./actionTypes";

const INIT_STATE = {
    Session: [],
};

const MentorSessionData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case MENTOR_SESSION_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case MENTOR_SESSION:
                    console.log( action, action.payload, action.payload.data,"in here 3")

                    return {
                        ...state,
                        Session: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case MENTOR_SESSION_API_ERROR:
            switch (action.payload.actionType) {
                case MENTOR_SESSION:
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

export default MentorSessionData;