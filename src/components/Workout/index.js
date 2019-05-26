import {connect} from "react-redux";
import Workout from './Workout'
import {getWorkoutInfo, getWorkoutUserInfo} from "../../actions/workout.actions";

const mapStateToProps = (state) => ({
    user: state.workoutReducer.user,
    workout: state.workoutReducer.workout
});

const mapDispatchToProps = (dispatch) => ({
    getWorkoutUserInfo: (id) => {
        dispatch(getWorkoutUserInfo(id))
    },
    getWorkoutInfo: (id) => {
        dispatch(getWorkoutInfo(id))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Workout);