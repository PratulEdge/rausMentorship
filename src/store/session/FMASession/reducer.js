import {
    MENTOR_ASSIGNED_SESSION,
    MENTOR_ASSIGNED_SESSION_SUCCESS,
    MENTOR_ASSIGNED_SESSION_API_ERROR,
} from "./actionTypes";

const INIT_STATE = {
    assignedSession: [],
};

const MentorAssignedSessionData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case MENTOR_ASSIGNED_SESSION_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case MENTOR_ASSIGNED_SESSION:
                    console.log( action, action.payload, action.payload.data,"in here 3")

                    return {
                        ...state,
                        assignedSession: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case MENTOR_ASSIGNED_SESSION_API_ERROR:
            switch (action.payload.actionType) {
                case MENTOR_ASSIGNED_SESSION:
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

export default MentorAssignedSessionData;