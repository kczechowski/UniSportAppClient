import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Header extends Component {

    render() {

        const {username} = this.props.user || "";

        return (
            <div>
                <Link to="/app/" >Home</Link>
                <Link to="/logout" >Logout</Link>
                <h4>Logged as: {username}</h4>
            </div>
        );
    }

}