import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {isAuthenticated} from "../../utils/auth.utils";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }} />
    )} />
)


const mapStateToProps = (state) => ({
    isAuthenticated: isAuthenticated(state)
});

export default connect(mapStateToProps, null)(PrivateRoute);