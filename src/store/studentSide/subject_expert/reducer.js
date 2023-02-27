import {
    STU_SUBJECT_EXPERT,
    STU_SUBJECT_EXPERT_SUCCESS,
    STU_SUBJECT_EXPERT_API_ERROR
} from "./actionTypes";

const INIT_STATE = {
    stuSubjectExpertData: [],
};

const StuSubjectExpertData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case STU_SUBJECT_EXPERT_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case STU_SUBJECT_EXPERT:
                    return {
                        ...state,
                        stuSubjectExpertData: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case STU_SUBJECT_EXPERT_API_ERROR:
            switch (action.payload.actionType) {
                case STU_SUBJECT_EXPERT:
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

export default StuSubjectExpertData;