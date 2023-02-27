import {
    STU_MENTOR_AVAIL,
    STU_MENTOR_AVAIL_SUCCESS,
    STU_MENTOR_AVAIL_API_ERROR
} from "./actionTypes";

const INIT_STATE = {
    stuMentorAvailData: [],
};

const StuMentorAvailData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case STU_MENTOR_AVAIL_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case STU_MENTOR_AVAIL:
                    return {
                        ...state,
                        stuMentorAvailData: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case STU_MENTOR_AVAIL_API_ERROR:
            switch (action.payload.actionType) {
                case STU_MENTOR_AVAIL:
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

export default StuMentorAvailData;