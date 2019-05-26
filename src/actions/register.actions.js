import jwtDecode from "jwt-decode";
import * as userService from "../services/user.service";
import {handleError} from "../utils/auth.utils";
export const TEMP_TOKEN_SAVE = 'TEMP_TOKEN_SAVE';
export const CREATE_USER = 'CREATE_USER';

export const saveToken = (token) => {
    let decoded;
    try {
        decoded = jwtDecode(token);
    } catch (e) {
        return new Error();
    }
    return {
        type: TEMP_TOKEN_SAVE,
        payload: {
            access_token: token,
            ...decoded
        }
    }
};

export const createUser = (username) => (dispatch, getState) => {
    const {access_token} = getState().registerReducer.token || '';
    return dispatch({
        type: CREATE_USER,
        payload: {
            promise: userService.createUser(username, access_token)
        }
    }).catch((error)=>{
        handleError(dispatch, error);
    })
}