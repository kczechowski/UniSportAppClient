import {handleResponse} from "../utils/auth.utils";


export const getAllUsers = (authHeaders) => {
    const url = `http://10.10.10.10/public/api/users/`;
    return fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + authHeaders
        }
    }).then(handleResponse)
};

export const createUser = (username, authHeaders) => {
    const url = `http://10.10.10.10/public/api/users/`;
    const params = {username: username};
    return fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + authHeaders
        },
        body: JSON.stringify(params)
    }).then(handleResponse)
};

export const addWorkout = (userID, startTime, endTime, type, title, message, calories, distance, authHeaders) => {
    const url = `http://10.10.10.10/public/api/workouts/`;
    const params = {userID:userID, startTime:startTime, endTime:endTime, type:type, title:title, message:message, calories:calories, distance:distance};
    return fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + authHeaders
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

export const deleteUser = (id, authHeaders) => {
    const url = `http://10.10.10.10/public/api/users/${id}`;
    return fetch(url, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + authHeaders
        }
    }).then(handleResponse)
};

export const getWorkoutInfo = (id, authHeaders) => {
    const url = `http://10.10.10.10/public/api/workouts/${id}`;
    return fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + authHeaders
        }
    }).then(handleResponse)
};

export const getUserWorkouts = (id, authHeaders, page) => {
    const url = `http://10.10.10.10/public/api/users/${id}/workouts/page/${page}`;
    return fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + authHeaders
        }
    }).then(handleResponse)
};

