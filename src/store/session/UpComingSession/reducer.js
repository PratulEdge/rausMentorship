import {
    UC_SESSION,
    UC_SESSION_SUCCESS,
    UC_SESSION_API_ERROR,
} from "./actionTypes";

const INIT_STATE = {
    UC_Session: [],
};

const UCSessionData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case UC_SESSION_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case UC_SESSION:
                    console.log( action, action.payload, action.payload.data,"in here 3")

                    return {
                        ...state,
                        UC_Session: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case UC_SESSION_API_ERROR:
            switch (action.payload.actionType) {
                case UC_SESSION:
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

export default UCSessionData;