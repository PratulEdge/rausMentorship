import {
    STUDENT_PAST_SESS,
    STUDENT_PAST_SESS_SUCCESS,
    STUDENT_PAST_SESS_API_ERROR
} from "./actionTypes";

const INIT_STATE = {
    studentPastSessData: [],
};

const StudentPastSessData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case STUDENT_PAST_SESS_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case STUDENT_PAST_SESS:
                    return {
                        ...state,
                        studentPastSessData: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case STUDENT_PAST_SESS_API_ERROR:
            switch (action.payload.actionType) {
                case STUDENT_PAST_SESS:
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

export default StudentPastSessData;