import {
    MS_STUDENT_LIST,
    MS_STUDENT_LIST_SUCCESS,
    MS_STUDENT_LIST_API_ERROR
} from "./actionTypes";

const INIT_STATE = {
    ms_student_data: [],
};

const Ms_StudentData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case MS_STUDENT_LIST_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case MS_STUDENT_LIST:
                    return {
                        ...state,
                        ms_student_data: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case MS_STUDENT_LIST_API_ERROR:
            switch (action.payload.actionType) {
                case MS_STUDENT_LIST:
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

export default Ms_StudentData;