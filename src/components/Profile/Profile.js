import React, { Component } from 'react';

export default class Profile extends Component {

    componentDidMount() {
        const { match: {params}} = this.props;
        this.props.getUserInfo(params.user_id)
    }

    render() {

        const {username, id} = this.props.user || "";
        const {oauth_info} = this.props.user || {};
        const {email} = oauth_info || ''
        return (
            <div>
                <p>{id}, {username}, {email}</p>
            </div>
        );
    }

}