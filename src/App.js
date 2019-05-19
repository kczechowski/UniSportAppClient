import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter, Switch
} from 'react-router-dom'
import LoginForm from "./components/LoginForm";
import {connect} from "react-redux";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AppDashboard from "./components/AppDashboard/";
import Logout from "./components/Logout";


const Public = () => <h3>Public<Link to="/app/">Go to app</Link></h3>

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                <Route exact path="/" component={Public}/>
                <Route path="/login" component={LoginForm}/>
                <Route path="/logout" component={Logout}/>
                <PrivateRoute path='/app/' component={AppDashboard}/>
                </Switch>
            </Router>
        )
    }
}

export default connect(null, null)(App);
