import {
    PRE_TEST_LIST,
    PRE_TEST_LIST_SUCCESS,
    PRE_TEST_LIST_API_ERROR,
} from "./actionTypes";

const INIT_STATE = {
    preTestListData: [],
};

const PreTestListData = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case PRE_TEST_LIST_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case PRE_TEST_LIST:
                    return {
                        ...state,
                        preTestListData: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case PRE_TEST_LIST_API_ERROR:
            switch (action.payload.actionType) {
                case PRE_TEST_LIST:
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

export default PreTestListData;