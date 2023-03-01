import {
    STUDENT_PAST_SESSION_DETAIL,
    STUDENT_PAST_SESSION_DETAIL_SUCCESS,
    STUDENT_PAST_SESSION_DETAIL_API_ERROR,
} from "./actionTypes";

const INIT_STATE = {
    student_Past_Session_Data: [],
};

const Student_Past_Session_Data = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case STUDENT_PAST_SESSION_DETAIL_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case STUDENT_PAST_SESSION_DETAIL:
                    return {
                        ...state,
                        student_Past_Session_Data: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case STUDENT_PAST_SESSION_DETAIL_API_ERROR:
            switch (action.payload.actionType) {
                case STUDENT_PAST_SESSION_DETAIL:
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

export default Student_Past_Session_Data;