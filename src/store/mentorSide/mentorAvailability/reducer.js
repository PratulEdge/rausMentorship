import {
    MENTOR_AVAILABILITY,
    MENTOR_AVAILABILITY_SUCCESS,
    MENTOR_AVAILABILITY_API_ERROR
} from "./actionTypes";

const INIT_STATE = {
    mntAvailabilityData: [],
};

const MntAvailabilityData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case MENTOR_AVAILABILITY_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case MENTOR_AVAILABILITY:
                    return {
                        ...state,
                        mntAvailabilityData: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case MENTOR_AVAILABILITY_API_ERROR:
            switch (action.payload.actionType) {
                case MENTOR_AVAILABILITY:
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

export default MntAvailabilityData;