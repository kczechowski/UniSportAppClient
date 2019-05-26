import {GET_USER_WORKOUTS} from "../actions/feed.actions";
import {createReducer} from "./index";
import {GET_TOKEN_USERID, LOGIN, LOGOUT} from "../actions/auth.actions";
import {CREATE_USER, TEMP_TOKEN_SAVE} from "../actions/register.actions";

const initState = {

};

export const registerReducer = createReducer(initState, {
        [`${CREATE_USER}_PENDING`]: (state, action) => ({
            ...state,
            isUserCreated: undefined
        }),
        [`${CREATE_USER}_REJECTED`]: (state, action) => ({
            ...state,
            isUserCreated: false,
            errors: action.payload
        }),
        [`${CREATE_USER}_FULFILLED`]: (state, action) => ({
            ...state,
            isUserCreated: true,
        }),
        [`${TEMP_TOKEN_SAVE}`]: (state, action) => ({
            ...state,
            token: action.payload,
            errors: {}
        })
    }
);