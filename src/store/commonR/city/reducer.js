import {
    CITY,
    CITY_SUCCESS,
    CITY_API_ERROR
} from "./actionTypes";

const INIT_STATE = {
    cityData: [],
};

const City = (state = INIT_STATE, action) => {
    console.log(action.type, "in here 1")
    switch (action.type) {
        case CITY_SUCCESS:
            console.log("in here 2")
            switch (action.payload.actionType) {
                case CITY:
                    console.log( action, action.payload, action.payload.data,"in here 3")

                    return {
                        ...state,
                        cityData: action.payload.data,
                        isLoader: false,
                        isUser: true,
                    };
                default:
                    return { ...state };
            }
        case CITY_API_ERROR:
            switch (action.payload.actionType) {
                case CITY:
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

export default City;