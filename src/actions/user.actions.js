import * as userService from '../services/user.service';
import {handleError} from "../utils/auth.utils";

export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_LOGGED_IN_USER_INFO = 'GET_LOGGED_IN_USER_INFO';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USER_WORKOUTS = 'GET_USER_WORKOUTS';
export const CREATE_USER = 'CREATE_USER';
export const DELETE_USER = 'DELETE_USER';


// export const getUserInfo = (id) => (dispatch, getState) => {
//     const {access_token} = getState().authReducer.token;
//     return dispatch({
//         type: GET_USER_INFO,
//         payload: {
//             promise: userService.getUserInfo(id, access_token)
//         }
//     }).catch((error)=>{
//         handleError(dispatch, error);
//     })
// }

export const getLoggedInUserInfo = (id) => (dispatch, getState) => {
    const {access_token} = getState().authReducer.token;
    return dispatch({
        type: GET_LOGGED_IN_USER_INFO,
        payload: {
            promise: userService.getUserInfo(id, access_token)
        }
    }).catch((error)=>{
        handleError(dispatch, error);
    })
};

export const getAllUsers = () => (dispatch, getState) => {
    const {access_token} = getState().authReducer.token;
    return dispatch({
        type: GET_ALL_USERS,
        payload: {
            promise: userService.getAllUsers(access_token)
        }
    }).catch((error)=>{
        handleError(dispatch, error);
    })
};

export const deleteUser = (id) => (dispatch, getState) => {
    const {access_token} = getState().authReducer.token;
    return dispatch({
        type: DELETE_USER,
        payload: {
            promise: userService.deleteUser(id, access_token)
        }
    }).catch((error)=>{
        handleError(dispatch, error);
    })
};

// export const getUserWorkouts = (id) => (dispatch, getState)  => {
//     const {access_token} = getState().authReducer.token;
//     return dispatch({
//         type: GET_USER_WORKOUTS,
//         payload: {
//             promise: userService.getUserWorkouts(id, access_token)
//         }
//     }).catch((error)=>{
//         handleError(dispatch, error);
//     })
// };



