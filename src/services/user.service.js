import {handleResponse} from "../utils/auth.utils";

export const getAllUsers = () => {
    const url = `http://10.10.10.10/public/api/users/`;
    return fetch(url, {method: 'GET'}).then(handleResponse)
};

export const createUser = (username, email) => {
    const url = `http://10.10.10.10/public/api/users/`;
    const params = {username: username, email: email};
    return fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params)
    }).then(handleResponse)
};

export const getUserInfo = (id, authHeaders) => {
    const url = `http://10.10.10.10/public/api/users/${id}`;
    return fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + authHeaders
        }
    }).then(handleResponse)
};

export const getUserWorkouts = (id, authHeaders) => {
    const url = `http://10.10.10.10/public/api/users/${id}/workouts/`;
    return fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + authHeaders
        }
    }).then(handleResponse)
};

