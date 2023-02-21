import {
    T_SESSION,
    T_SESSION_SUCCESS,
    T_SESSION_API_ERROR,
} from "./actionTypes";

const INIT_STATE = {
    T_Session: [],
};

const TSessionData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case T_SESSION_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case T_SESSION:
                    console.log( action, action.payload, action.payload.data,"in here 3")

                    return {
                        ...state,
                        T_Session: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case T_SESSION_API_ERROR:
            switch (action.payload.actionType) {
                case T_SESSION:
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

export default TSessionData;