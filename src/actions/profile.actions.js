import * as userService from '../services/user.service';
import {handleError} from "../utils/auth.utils";

export const GET_USER_INFO = 'GET_USER_INFO';

export const getUserInfo = (id) => (dispatch, getState) => {
    const {access_token} = getState().authReducer.token;
    return dispatch({
        type: GET_USER_INFO,
        payload: {
            promise: userService.getUserInfo(id, access_token)
        }
    }).catch((error)=>{
        handleError(dispatch, error);
    })
};



