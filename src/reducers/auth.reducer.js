import {createReducer} from "./index";
import {GET_TOKEN_USERID, LOGIN, LOGOUT, TOKEN_SAVE} from "../actions/auth.actions";

const initState = {
    isAuthenticated: false,
    token: undefined
};

export const authReducer = createReducer(initState, {
        [`${LOGIN}_PENDING`]: (state, action) => ({
            ...state,
            isLogging: true
        }),
        [`${LOGIN}_REJECTED`]: (state, action) => ({
            ...state,
            isLogging: false,
            errors: action.payload
        }),
        [`${LOGIN}_FULFILLED`]: (state, action) => ({
            ...state,
            isLogging: false,
            isAuthenticated: true,
            token: action.payload,
            errors: {}
        }),
        [`${GET_TOKEN_USERID}_PENDING`]: (state, action) => ({
            ...state,
        }),
        [`${GET_TOKEN_USERID}_REJECTED`]: (state, action) => ({
            ...state,
            isAuthenticated: false,
            errors: action.payload
        }),
        [`${GET_TOKEN_USERID}_FULFILLED`]: (state, action) => ({
            ...state,
            isLogging: false,
            isAuthenticated: true,
            user_id: action.payload.user_id,
            errors: {}
        }),
        "TOKEN_SAVE": (state, action) => ({
            ...state,
            isLogging: false,
            isAuthenticated: true,
            token: action.payload,
            errors: {}
        }),
        [`${LOGOUT}`]: (state, action) => ({
            ...initState,
        }),
    }
);