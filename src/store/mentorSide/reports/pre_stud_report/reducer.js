import {
    PRE_STUD_REPORT,
    PRE_STUD_REPORT_SUCCESS,
    PRE_STUD_REPORT_API_ERROR,
} from "./actionTypes";

const INIT_STATE = {
    pre_stud_report_Data: [],
};

const Pre_stud_report_Data = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case PRE_STUD_REPORT_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case PRE_STUD_REPORT:
                    return {
                        ...state,
                        pre_stud_report_Data: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case PRE_STUD_REPORT_API_ERROR:
            switch (action.payload.actionType) {
                case PRE_STUD_REPORT:
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

export default Pre_stud_report_Data;