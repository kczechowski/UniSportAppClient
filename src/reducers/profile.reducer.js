import {GET_USER_INFO} from "../actions/profile.actions";
import {createReducer} from "./index";

const initState = {
    user: undefined
};

export const profileReducer = createReducer(initState, {
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
            user: action.payload,
            isFetching: false,
        })
    }
);