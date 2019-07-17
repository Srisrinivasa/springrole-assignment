import { actionTypes } from "../actionTypes";

const initialState = {
    loading: false,
    data: [],
    error: {},
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA:
            state = { ...state, loading: true }
            break;

        case actionTypes.GET_DATA_FULFILLED:
            state = { ...state, loading: false, data: action.payload }
            break;

        case actionTypes.GET_DATA_REJECTED:
            state = { ...state, loading: false, error: action.payload }
            break;

        default:
            return state;
    }
    return state;
};
