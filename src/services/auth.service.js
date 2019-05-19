import {handleResponse} from "../utils/auth.utils";

export const login = (username, password) => {
    const url = `http://10.10.10.1:9090/token`;
    const params = {grant_type: 'client_credentials', client_id: username, client_secret: password};
    return fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    }).then(handleResponse)
};

export const getTokenUserID = (token) => {
    const url = `http://10.10.10.10/public/token`;
    return fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": token
        },
    }).then(handleResponse)
};