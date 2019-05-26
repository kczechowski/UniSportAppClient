import React, { Component } from 'react';

export default class Workout extends Component {

    componentDidMount() {
        const { match: {params}} = this.props;
        this.props.getWorkoutInfo(params.workout_id);
        this.props.getWorkoutUserInfo(params.user_id);
    }

    render() {

        const {workout} = this.props || {};
        return (
            <div>
                <ul>{JSON.stringify(workout)}</ul>
            </div>
        );
    }

}