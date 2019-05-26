import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Header extends Component {

    componentDidMount() {
        if(this.props.user === undefined)
            this.props.getLoggedInUserInfo(this.props.user_id);
    }

    render() {

        const {username, id} = this.props.user || "";


        return (
            <div
                className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                <h5 className="my-0 mr-md-auto font-weight-normal"><Link to="/app/" >Home</Link></h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    Logged as: <Link className="p-2 text-dark" to={`/app/profile/${id}`}>{username}</Link>
                </nav>
                <Link className="btn btn-outline-primary" to="/logout" >Logout</Link>
            </div>
        );
    }

}