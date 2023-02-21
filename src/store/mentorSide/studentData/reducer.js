import {
    STUDENT_DATA,
    STUDENT_DATA_SUCCESS,
    STUDENT_DATA_API_ERROR
} from "./actionTypes";

const INIT_STATE = {
    studentData: [],
};

const StudentData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case STUDENT_DATA_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case STUDENT_DATA:
                    return {
                        ...state,
                        studentData: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case STUDENT_DATA_API_ERROR:
            switch (action.payload.actionType) {
                case STUDENT_DATA:
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

export default StudentData;