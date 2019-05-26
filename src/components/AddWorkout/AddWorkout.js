import React, {Component} from 'react';
import {Redirect} from "react-router-dom";

export default class AddWorkout extends Component {

    constructor(props) {
        super(props);
        this.state = {title: '', message: '', calories: '', distance: '', shouldReload: false};
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleCaloriesChange = this.handleCaloriesChange.bind(this);
        this.handleDistanceChange = this.handleDistanceChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addWorkout(this.props.user.id, (~~(Date.now() / 1000)), (~~(Date.now() / 1000)), 'CYCLING', this.state.title, this.state.message, this.state.calories, this.state.distance);
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handleMessageChange(event) {
        this.setState({message: event.target.value});
    }

    handleCaloriesChange(event) {
        this.setState({calories: event.target.value});
    }

    handleDistanceChange(event) {
        this.setState({distance: event.target.value});
    }


    render() {

        return (
            <div className="container">
                <div className="mb-3 text-center">
                    <h4>Add workout</h4>
                    <form onSubmit={this.handleSubmit}>
                        <label>Title</label><br/>
                        <input type="text" value={this.state.title} onChange={this.handleTitleChange}/><br/>
                        <label>Message</label><br/>
                        <input type="text" value={this.state.message} onChange={this.handleMessageChange}/><br/>
                        <label>Calories</label><br/>
                        <input type="text" value={this.state.calories} onChange={this.handleCaloriesChange}/><br/>
                        <label>Distance</label><br/>
                        <input type="text" value={this.state.distance} onChange={this.handleDistanceChange}/><br/>
                        <input type="submit" value="Create"/>
                    </form>
                </div>
            </div>
        );
    }

}