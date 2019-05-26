import * as userService from "../services/user.service";
import {handleError, handleResponse} from "../utils/auth.utils";
export const GET_WORKOUT_INFO = 'GET_WORKOUT_INFO';
export const GET_WORKOUT_USER_INFO = 'GET_WORKOUT_USER_INFO';
export const ADD_WORKOUT = 'ADD_WORKOUT';

export const getWorkoutInfo = (id) => (dispatch, getState) => {
    const {access_token} = getState().authReducer.token;
    return dispatch({
        type: GET_WORKOUT_INFO,
        payload: {
            promise: userService.getWorkoutInfo(id, access_token)
        }
    }).catch((error)=>{
        handleError(dispatch, error);
    })
};

export const getWorkoutUserInfo = (id) => (dispatch, getState) => {
    const {access_token} = getState().authReducer.token;
    return dispatch({
        type: GET_WORKOUT_USER_INFO,
        payload: {
            promise: userService.getUserInfo(id, access_token)
        }
    }).catch((error)=>{
        handleError(dispatch, error);
    })
};

export const addWorkout = (userID, startTime, endTime, type, title, message, calories, distance) => (dispatch, getState) => {
    const {access_token} = getState().authReducer.token;
    return dispatch({
        type: ADD_WORKOUT,
        payload: {
            promise: userService.addWorkout(userID, startTime, endTime, type, title, message, calories, distance, access_token)
        }
    }).catch((error)=>{
        handleError(dispatch, error);
    })
};