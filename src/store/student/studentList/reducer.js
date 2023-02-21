import {
    STUDENT_DETAIL,
    STUDENT_DETAIL_SUCCESS,
    STUDENT_DETAIL_API_ERROR
} from "./actionTypes";

const INIT_STATE = {
    studentData: [],
};

const StudentUserData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case STUDENT_DETAIL_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case STUDENT_DETAIL:
                    console.log( action, action.payload, action.payload.data,"in here 3")

                    return {
                        ...state,
                        studentData: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case STUDENT_DETAIL_API_ERROR:
            switch (action.payload.actionType) {
                case STUDENT_DETAIL:
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

export default StudentUserData;