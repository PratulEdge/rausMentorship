import {
    MENTOR_DETAIL,
    MENTOR_DETAIL_SUCCESS,
    MENTOR_DETAIL_API_ERROR
} from "./actionTypes";

const INIT_STATE = {
    userData: [],
};

const UserData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case MENTOR_DETAIL_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case MENTOR_DETAIL:
                    console.log( action, action.payload, action.payload.data,"in here 3")

                    return {
                        ...state,
                        userData: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case MENTOR_DETAIL_API_ERROR:
            switch (action.payload.actionType) {
                case MENTOR_DETAIL:
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

export default UserData;