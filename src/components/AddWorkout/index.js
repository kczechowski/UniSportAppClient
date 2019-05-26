import {connect} from "react-redux";
import AddWorkout from './AddWorkout'
import {getUserInfo} from "../../actions/profile.actions";
import {deleteUser} from "../../actions/user.actions";
import {addWorkout} from "../../actions/workout.actions";

const mapStateToProps = (state) => ({
    user: state.userReducer.user
});

const mapDispatchToProps = (dispatch) => ({
    addWorkout: (userID, startTime, endTime, type, title, message, calories, distance)  => {
        dispatch(addWorkout(userID, startTime, endTime, type, title, message, calories, distance))
}
});

export default connect(mapStateToProps, mapDispatchToProps)(AddWorkout);