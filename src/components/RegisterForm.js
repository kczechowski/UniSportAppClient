// basic react component starting template
import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import {isAuthenticated} from "../utils/auth.utils";
import {createUser, saveToken} from "../actions/register.actions";

class RegisterForm extends Component {

    componentDidMount() {
        const code = window.location.href.match(/\?code=(.*)/) && window.location.href.match(/\?code=(.*)/)[1];
        if (code) {
            this.props.saveToken(code);
        }
    }

    constructor(props) {
        super(props);
        this.state = {username: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handleSubmit(event) {
        this.props.createUser(this.state.username);
        event.preventDefault();
    }

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/app/'}};
        // const {isAuthenticated} = this.props;
        const {isUserCreated} = this.props;
        if (isUserCreated === false) {
            alert("error");
            return (<Redirect to="/"/>)
        }

        if (isUserCreated === true) {
            alert('Account created');
            return (<Redirect to="/"/>)
        }

        // if (isAuthenticated)
        //     return (<Redirect to={from}/>);

        return (
            <div>
                {!this.props.tokenInfo ?
                    <a href="http://10.10.10.1:9090/login?redirect_uri=http://localhost:3000/register"
                       className="btn btn-lg btn-block btn-primary">Login using OAuth</a>
                    :
                    <div>
                        <p>Creating account for {this.props.tokenInfo.aud}</p>
                        <form onSubmit={this.handleSubmit}>
                            <label>Username</label><br/>
                            <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                            <input type="submit" value="Create"/>
                        </form>
                    </div>
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    tokenInfo: state.registerReducer.token,
    isUserCreated: state.registerReducer.isUserCreated
});

const mapDispatchToProps = (dispatch) => ({
    saveToken: (token) => {
        dispatch(saveToken(token))
    },
    createUser: (username) => {
        dispatch(createUser(username))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);