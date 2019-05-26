import {GET_USER_WORKOUTS, SET_PAGE} from "../actions/feed.actions";
import {createReducer} from "./index";
import {ADD_WORKOUT} from "../actions/workout.actions";

const initState = {
    workouts: undefined
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
            workouts: action.payload.workouts,
            hasNext: action.payload.hasNext,
            isFetching: false,
        }),
        [`${ADD_WORKOUT}_FULFILLED`]: (state, action) => ({
            ...state,
            workouts: undefined
        }),
        [`${SET_PAGE}`]: (state, action) => ({
            ...state,
            workouts: undefined,
            page: action.payload
        })
    }
);