import React, { Component } from 'react';

export default class Feed extends Component {

    componentDidMount() {
        this.props.getUserWorkouts(this.props.user_id);
    }

    render() {
        const {workouts} = this.props || [];
        const elements = workouts ? workouts.map((workout) => <li key={workout.id}>{workout.id}</li>) : '';
        return (
            <div>
                <h1>Workouts</h1>
                <ul>{elements}</ul>
            </div>
        );
    }

}