import {
    MENTOR_SESSION_REPORT,
    MENTOR_SESSION_REPORT_SUCCESS,
    MENTOR_SESSION_REPORT_API_ERROR,
} from "./actionTypes";

const INIT_STATE = {
    mnt_sess_report_Data: [],
};

const Mnt_Sess_report_Data = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case MENTOR_SESSION_REPORT_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case MENTOR_SESSION_REPORT:
                    return {
                        ...state,
                        mnt_sess_report_Data: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case MENTOR_SESSION_REPORT_API_ERROR:
            switch (action.payload.actionType) {
                case MENTOR_SESSION_REPORT:
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

export default Mnt_Sess_report_Data;