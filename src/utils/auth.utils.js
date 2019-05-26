import {logout} from "../actions/auth.actions";

export const handleResponse = (response) => {
    return response.text().then( (text) => {
        const data = text && JSON.parse(text);
        if(!response.ok){
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    })
};

export const handleError = (dispatch, error) => {
    //if unauthorized
    if(error === 'Unauthorized')
        dispatch(logout());
};

export const isAuthenticated = (state) =>{
    if(state.authReducer.isAuthenticated && state.authReducer.token && state.authReducer.token.exp)
        return state.authReducer.token.exp - Math.round((new Date()).getTime() / 1000) >= 0
    return false
}

export const addAuthHeaders = () => {

};
