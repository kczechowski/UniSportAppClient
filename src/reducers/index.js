import { combineReducers } from 'redux';

import {userReducer} from './user.reducer';
import {authReducer} from "./auth.reducer";
import {profileReducer} from "./profile.reducer";
import {feedReducer} from "./feed.reducer";

const rootReducers = combineReducers({
    userReducer,
    authReducer,
    profileReducer,
    feedReducer
});

export function createReducer(initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}

export default rootReducers;