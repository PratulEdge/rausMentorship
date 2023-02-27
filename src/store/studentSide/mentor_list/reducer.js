import {
    STU_MENTOR_LIST,
    STU_MENTOR_LIST_SUCCESS,
    STU_MENTOR_LIST_API_ERROR
} from "./actionTypes";

const INIT_STATE = {
    stuMentorListData: [],
};

const StuMentorListData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case STU_MENTOR_LIST_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case STU_MENTOR_LIST:
                    return {
                        ...state,
                        stuMentorListData: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case STU_MENTOR_LIST_API_ERROR:
            switch (action.payload.actionType) {
                case STU_MENTOR_LIST:
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

export default StuMentorListData;