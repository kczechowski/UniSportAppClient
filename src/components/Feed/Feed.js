import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Feed extends Component {

    componentDidMount() {
            this.props.getUserWorkouts(this.props.user_id, this.state.page);

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState.page);
        console.log(this.state.page);
            // this.props.getUserWorkouts(this.props.user_id, this.state.page);
    }

    constructor(props) {
        super(props);
        this.state = {page: 1}
        this.handlePageNext = this.handlePageNext.bind(this);
        this.handlePagePrev = this.handlePagePrev.bind(this);
    }

    handlePageNext(e) {
        e.preventDefault();
        if (this.props.hasNext) {
            this.setState({page: ++this.state.page});
            this.props.setPage(this.state.page + 1);
            this.props.getUserWorkouts(this.props.user_id, this.state.page);
        }
    }

    handlePagePrev(e) {
        e.preventDefault();
        if (this.state.page !== 1) {
            this.setState({page: --this.state.page});
            this.props.setPage(this.state.page - 1);
            this.props.getUserWorkouts(this.props.user_id, this.state.page);
        }
    }

    render() {
        const {workouts} = this.props || [];
        // const elements = workouts.length > 0 ? workouts.map((workout) => <li key={workout.id}><Link
        //     to={`/app/workout/${this.props.user_id}/${workout.id}`}>{workout.title}</Link></li>) : '';
        const elements = workouts && workouts.length > 0 ? workouts.map((workout) => (
            <div className="card mb-4 w-100 shadow-sm" key={workout.id}>
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal"><Link
                        to={`/app/workout/${this.props.user_id}/${workout.id}`}>{workout.title}</Link></h4>
                </div>
                <div className="card-body">
                    <ul className="list-unstyled mt-3 mb-4">
                        <li>{workout.message}</li>
                        <li>{workout.start_time}</li>
                        <li>{JSON.stringify(workout)}</li>
                    </ul>
                </div>
            </div>
        )) : '';
        return (

            <div className="container">

                {elements !== '' ?
                    <div className="mb-3 text-center">
                        <h4>Feed</h4>
                        {elements}
                        <button onClick={this.handlePagePrev}>{'<'}</button>
                        {this.state.page}
                        <button onClick={this.handlePageNext}>></button>
                    </div>
                    :
                    <div className="mb-3 text-center"><h4>Feed</h4><p>You have no workouts yet.</p></div>
                }
            </div>

        );
    }

}