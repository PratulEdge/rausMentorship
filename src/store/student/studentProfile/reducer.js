import {
    STUDENT_PROFILE,
    STUDENT_PROFILE_SUCCESS,
    STUDENT_PROFILE_API_ERROR,
} from "./actionTypes";

const INIT_STATE = {
    studentData: [],
};

const StudentProfileData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case STUDENT_PROFILE_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case STUDENT_PROFILE:
                    console.log( action, action.payload.id, action.payload.data,"student in here 3")

                    return {
                        ...state,
                        studentData: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case STUDENT_PROFILE_API_ERROR:
            switch (action.payload.actionType) {
                case STUDENT_PROFILE:
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

export default StudentProfileData;