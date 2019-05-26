import React, {Component} from 'react';
import Header from "../Header";
import Achievements from "../Achievements";
import Feed from "../Feed";
import Profile from "../Profile";
import {Link, Route, Switch} from "react-router-dom";
import Workout from "../Workout";
import AdminTools from "../AdminTools";
import AddWorkout from "../AddWorkout";

export default class AppDashboard extends Component {

    componentDidMount() {
        // console.log(this.props.user_id);
        // if (this.props.user_id) {
        //     this.props.getUserInfo(this.props.user_id);
        //     this.props.getUserWorkouts(this.props.user_id);
        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.user_id) {
            this.props.getLoggedInUserInfo(this.props.user_id);
        }
    }

    render() {
        if (this.props.user_id)
            return (
                <div>
                    <Header/>
                    <Route exact path="/app/" render={() => (
                        <div>
                            <AdminTools/>
                            <AddWorkout/>
                            {/*<Feed/>*/}
                            <Route component={Feed}/>
                        </div>
                    )}/>
                    <Route path="/app/profile/:user_id" component={Profile}/>
                    <Route path="/app/workout/:user_id/:workout_id" component={Workout}/>
                </div>
            )
        else
            return (
                <div></div>
            )
    }
}