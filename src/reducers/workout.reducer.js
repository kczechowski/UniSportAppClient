import {createReducer} from "./index";
import {GET_WORKOUT_INFO, GET_WORKOUT_USER_INFO} from "../actions/workout.actions";

const initState = {
    workout: undefined,
    user: undefined
};

export const workoutReducer = createReducer(initState, {
        [`${GET_WORKOUT_INFO}_PENDING`]: (state, action) => ({
            ...state,
            isFetching: true,
        }),
        [`${GET_WORKOUT_INFO}_FAILED`]: (state, action) => ({
            ...state,
            isFetching: false,
        }),
        [`${GET_WORKOUT_INFO}_FULFILLED`]: (state, action) => ({
            ...state,
            workout: action.payload,
            isFetching: false,
        }),
        [`${GET_WORKOUT_USER_INFO}_PENDING`]: (state, action) => ({
            ...state,
            isFetching: true,
        }),
        [`${GET_WORKOUT_USER_INFO}_FAILED`]: (state, action) => ({
            ...state,
            isFetching: false,
        }),
        [`${GET_WORKOUT_USER_INFO}_FULFILLED`]: (state, action) => ({
            ...state,
            user: action.payload,
            isFetching: false,
        })
    }
);