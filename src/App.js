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
import RegisterForm from "./components/RegisterForm";


const Public = () => (
    <div className="container">

        <div className="mb-3 text-center">
            <div className="card mb-4 w-100 shadow-sm" >
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">Welcome</h4>
                </div>
                <div className="card-body">
                    <Link to="/app/" className="btn btn-lg btn-block btn-primary">Go to app</Link>
                </div>
            </div>
        </div>
    </div>
);

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Public}/>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/register" component={RegisterForm}/>
                    <Route path="/logout" component={Logout}/>
                    <PrivateRoute path='/app/' component={AppDashboard}/>
                </Switch>
            </Router>
        )
    }
}

export default connect(null, null)(App);
