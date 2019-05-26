import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class AdminTools extends Component {

    componentDidMount() {
        if (!this.props.users)
            this.props.getAllUsers();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.props.users)
            this.props.getAllUsers();
    }

    handleDelete(id){
        this.props.deleteUser(id);
    }

    render() {
        const {token} = this.props || {};

        const {users} = this.props || [];

        const elements = users && users.length > 0 ? users.map((user) => (
            <div className="card mb-4 w-100 shadow-sm" key={user.id}>
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">
                        <Link to={`/app/profile/${user.id}/`}>{user.username}</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <ul className="list-unstyled mt-3 mb-4">
                        {JSON.stringify(user)}
                    </ul>
                    <button className="btn btn-lg btn-block btn-primary" onClick={() => this.handleDelete(user.id)}>Delete</button>
                </div>
            </div>
        )) : '';


        if (token.scopes.includes('caneditusers'))
            return (
                <div className="container">
                    <div className="mb-3 text-center">
                        <h4>Admin tools</h4>
                        {elements}
                    </div>
                </div>
            );
        else
            return ('');
    }

}