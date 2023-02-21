import {
    MS_STUDENT_PROFILE,
    MS_STUDENT_PROFILE_SUCCESS,
    MS_STUDENT_PROFILE_API_ERROR,
} from "./actionTypes";

const INIT_STATE = {
    ms_studentData: [],
};

const Ms_StudentProfileData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case MS_STUDENT_PROFILE_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case MS_STUDENT_PROFILE:
                    return {
                        ...state,
                        ms_studentData: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case MS_STUDENT_PROFILE_API_ERROR:
            switch (action.payload.actionType) {
                case MS_STUDENT_PROFILE:
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

export default Ms_StudentProfileData;