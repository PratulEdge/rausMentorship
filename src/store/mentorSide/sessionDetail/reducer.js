import {
    MS_SESSION_DETAIL,
    MS_SESSION_DETAIL_SUCCESS,
    MS_SESSION_DETAIL_API_ERROR,
} from "./actionTypes";

const INIT_STATE = {
    Ms_sessionDetail: [],
};

const Ms_DetailSessionData = (state = INIT_STATE, action) => {
    switch (action.type) {
        case MS_SESSION_DETAIL_SUCCESS:
            switch (action.payload.actionType) {
                case MS_SESSION_DETAIL:
                    console.log( action, action.payload, action.payload.data,"in here 3")

                    return {
                        ...state,
                        Ms_sessionDetail: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case MS_SESSION_DETAIL_API_ERROR:
            switch (action.payload.actionType) {
                case MS_SESSION_DETAIL:
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

export default Ms_DetailSessionData;