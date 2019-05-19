// basic react component starting template
import React, {Component} from 'react';
import {createUser, getAllUsers, getUserInfo} from "../actions/user.actions";
import {getTokenUserID, login, saveToken} from "../actions/auth.actions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {isAuthenticated} from "../utils/auth.utils";

class LoginForm extends Component {

    componentDidMount() {
        const code = window.location.href.match(/\?code=(.*)/) && window.location.href.match(/\?code=(.*)/)[1];
        if (code) {
            this.props.saveToken(code);
            this.props.getTokenUserID();
        }
    }

    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        this.props.login(this.state.username, this.state.password);
        event.preventDefault();
    }

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/app/'}};
        const {isAuthenticated} = this.props;
        if (isAuthenticated)
            return (<Redirect to={from}/>);

        return (
            <div>
                <a href={"http://10.10.10.1:9090/login?redirect_uri=http://localhost:3000/login"}>link</a>
                {/*<form onSubmit={this.handleSubmit}>*/}
                {/*<h1>Login using oauth account</h1>*/}
                {/*<label>*/}
                {/*username:*/}
                {/*<input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>*/}
                {/*</label>*/}
                {/*<label>*/}
                {/*password:*/}
                {/*<input type="text" value={this.state.password} onChange={this.handlePasswordChange}/>*/}
                {/*</label>*/}
                {/*<input type="submit" value="Submit"/>*/}
                {/*</form>*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: isAuthenticated(state)
});

const mapDispatchToProps = (dispatch) => ({
    login: (username, password) => {
        dispatch(login(username, password))
    },
    saveToken: (token) => {
        dispatch(saveToken(token))
    },
    getTokenUserID: (token) => {
        dispatch(getTokenUserID(token))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);