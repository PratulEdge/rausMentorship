import {
    SUBJECT_EXPERT,
    SUBJECT_EXPERT_SUCCESS,
    SUBJECT_EXPERT_API_ERROR
} from "./actionTypes";

const INIT_STATE = {
    subjectExpertData: [],
};

const SubjectExpertData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case SUBJECT_EXPERT_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case SUBJECT_EXPERT:
                    console.log( action, action.payload, action.payload.data,"in here 3")

                    return {
                        ...state,
                        subjectExpertData: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case SUBJECT_EXPERT_API_ERROR:
            switch (action.payload.actionType) {
                case SUBJECT_EXPERT:
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

export default SubjectExpertData;