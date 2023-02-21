import {
    STATE,
    STATE_SUCCESS,
    STATE_API_ERROR
} from "./actionTypes";

const INIT_STATE = {
    stateData: [],
};

const State = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case STATE_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case STATE:
                    console.log( action, action.payload, action.payload.data,"in here 3")

                    return {
                        ...state,
                        stateData: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case STATE_API_ERROR:
            switch (action.payload.actionType) {
                case STATE:
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

export default State;