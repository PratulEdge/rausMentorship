import {
    MENTOR_DASH_DETAIL,
    MENTOR_DASH_DETAIL_SUCCESS,
    MENTOR_DASH_DETAIL_API_ERROR
} from "./actionTypes";

const INIT_STATE = {
    mentorDashData: [],
};

const MentorDashData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case MENTOR_DASH_DETAIL_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case MENTOR_DASH_DETAIL:
                    return {
                        ...state,
                        mentorDashData: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case MENTOR_DASH_DETAIL_API_ERROR:
            switch (action.payload.actionType) {
                case MENTOR_DASH_DETAIL:
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

export default MentorDashData;