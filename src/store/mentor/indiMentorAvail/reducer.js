import {
    INDI_MENTOR_AVAIL,
    INDI_MENTOR_AVAIL_SUCCESS,
    INDI_MENTOR_AVAIL_API_ERROR
} from "./actionTypes";

const INIT_STATE = {
    indiMentorAvailData: [],
};

const IndiMentorAvailData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case INDI_MENTOR_AVAIL_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case INDI_MENTOR_AVAIL:
                    console.log( action, action.payload, action.payload.data,"in here 3")

                    return {
                        ...state,
                        indiMentorAvailData: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case INDI_MENTOR_AVAIL_API_ERROR:
            switch (action.payload.actionType) {
                case INDI_MENTOR_AVAIL:
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

export default IndiMentorAvailData;