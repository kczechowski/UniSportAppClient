import {GET_LOGGED_IN_USER_INFO, GET_USER_INFO, GET_USER_WORKOUTS} from "../actions/user.actions";
import {GET_ALL_USERS} from "../actions/user.actions";
import {CREATE_USER} from "../actions/user.actions";
import {createReducer} from "./index";

const initState = {
    user: undefined,
    users: []
};

export const userReducer = createReducer(initState, {
        [`${GET_USER_INFO}_PENDING`]: (state, action) => ({
            ...state,
            isFetching: true,
        }),
        [`${GET_USER_INFO}_FAILED`]: (state, action) => ({
            ...state,
            isFetching: false,
        }),
        [`${GET_USER_INFO}_FULFILLED`]: (state, action) => ({
            ...state,
            requestedUser: action.payload,
            isFetching: false,
        }),
        [`${GET_LOGGED_IN_USER_INFO}_PENDING`]: (state, action) => ({
            ...state,
            isFetching: true,
        }),
        [`${GET_LOGGED_IN_USER_INFO}_FAILED`]: (state, action) => ({
            ...state,
            isFetching: false,
        }),
        [`${GET_LOGGED_IN_USER_INFO}_FULFILLED`]: (state, action) => ({
            ...state,
            user: action.payload,
            isFetching: false,
        }),
        [`${GET_USER_WORKOUTS}_PENDING`]: (state, action) => ({
            ...state,
            isFetching: true,
        }),
        [`${GET_USER_WORKOUTS}_FAILED`]: (state, action) => ({
            ...state,
            isFetching: false,
        }),
        [`${GET_USER_WORKOUTS}_FULFILLED`]: (state, action) => ({
            ...state,
            workouts: action.payload,
            isFetching: false,
        }),
        [`${GET_ALL_USERS}_FULFILLED`]: (state, action) => ({
            ...state,
            users: action.payload,
        }),
        [`${CREATE_USER}_FULFILLED`]: (state, action) => ({
            ...state,
        })
    }
);