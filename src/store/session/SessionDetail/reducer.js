import {
    SESSION_DETAIL,
    SESSION_DETAIL_SUCCESS,
    SESSION_DETAIL_API_ERROR,
} from "./actionTypes";

const INIT_STATE = {
    SessionDetail: [],
};

const DetailSessionData = (state = INIT_STATE, action) => {
    switch (action.type) {
        case SESSION_DETAIL_SUCCESS:
            switch (action.payload.actionType) {
                case SESSION_DETAIL:
                    console.log( action, action.payload, action.payload.data,"in here 3")

                    return {
                        ...state,
                        SessionDetail: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case SESSION_DETAIL_API_ERROR:
            switch (action.payload.actionType) {
                case SESSION_DETAIL:
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

export default DetailSessionData;