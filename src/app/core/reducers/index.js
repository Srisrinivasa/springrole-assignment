import { combineReducers } from 'redux';
import { user } from "features/Home/reducers";
// reducers

export const rootReducer = combineReducers({
    user
});
