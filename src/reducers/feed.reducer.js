import {GET_USER_WORKOUTS} from "../actions/feed.actions";
import {createReducer} from "./index";

const initState = {
    workouts: []
};

export const feedReducer = createReducer(initState, {
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
        })
    }
);