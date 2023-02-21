import {
    A_SESSION,
    A_SESSION_SUCCESS,
    A_SESSION_API_ERROR,
} from "./actionTypes";

const INIT_STATE = {
    A_Session: [],
};

const ASessionData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case A_SESSION_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case A_SESSION:
                    console.log( action, action.payload, action.payload.data,"in here 3")

                    return {
                        ...state,
                        A_Session: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case A_SESSION_API_ERROR:
            switch (action.payload.actionType) {
                case A_SESSION:
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

export default ASessionData;