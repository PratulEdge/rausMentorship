import {
    STUDENT_DASH_DETAIL,
    STUDENT_DASH_DETAIL_SUCCESS,
    STUDENT_DASH_DETAIL_API_ERROR
} from "./actionTypes";

const INIT_STATE = {
    studentDashData: [],
};

const StudentDashData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case STUDENT_DASH_DETAIL_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case STUDENT_DASH_DETAIL:
                    return {
                        ...state,
                        studentDashData: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case STUDENT_DASH_DETAIL_API_ERROR:
            switch (action.payload.actionType) {
                case STUDENT_DASH_DETAIL:
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

export default StudentDashData;