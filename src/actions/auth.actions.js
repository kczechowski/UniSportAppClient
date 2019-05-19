import * as authService from '../services/auth.service';
import jwtDecode from 'jwt-decode';
import {handleError} from "../utils/auth.utils";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const TOKEN_SAVE = 'TOKEN_SAVE';
export const GET_TOKEN_USERID = 'GET_TOKEN_USERID';
export const login = (username, password) => {
    return {
        type: LOGIN,
        payload: {
            promise: authService.login(username, password)
        }
    }
}

export const saveToken = (token) => {
    let decoded;
    try {
        decoded = jwtDecode(token);
    } catch (e) {
        return logout();
    }
    return {
        type: TOKEN_SAVE,
        payload: {
            access_token: token,
            ...decoded
        }
    }
}

export const getTokenUserID = () => (dispatch, getState) => {
    const {access_token} = getState().authReducer.token || '';
    return dispatch({
        type: GET_TOKEN_USERID,
        payload: {
            promise: authService.getTokenUserID(access_token)
        }
    }).catch((error)=>{
        handleError(dispatch, error);
    })
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}
// export const getUserInfo = (id) => {
//     return {
//         type: GET_USER_INFO,
//         payload: {
//             promise: userService.getUserInfo(id)
//         }
//     }
// }
//
// export const getAllUsers = () => {
//     return {
//         type: GET_ALL_USERS,
//         payload: {
//             promise: userService.getAllUsers()
//         }
//     }
// }
//
// // export const getAllUsers = () => {
// //     const url = `http://10.10.10.10/public/api/users/`;
// //     return {
// //         type: GET_ALL_USERS,
// //         payload: {
// //             promise: fetch(url, {method: 'GET'}).then(res=>res.json())
// //         }
// //     }
// // }
// export const createUser = (username, email) => {
//     const url = `http://10.10.10.10/public/api/users/`;
//     const params = {username: username, email: email};
//     return {
//         type: CREATE_USER,
//         payload: {
//             promise: userService.createUser(username, email)
//         }
//     }
// }
// export const createUser = (username, email) => {
//     const url = `http://10.10.10.10/public/api/users/`;
//     const params = {username: username, email: email};
//     return {
//         type: CREATE_USER,
//         payload: {
//             promise: fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(params)
//             }).then(res => res)
//         }
//     }
// }



