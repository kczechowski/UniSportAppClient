import {connect} from "react-redux";
import Feed from './Feed'
import {getUserWorkouts} from "../../actions/feed.actions";

const mapStateToProps = (state) => ({
    user_id: state.authReducer.user_id,
    workouts: state.feedReducer.workouts
});

const mapDispatchToProps = (dispatch) => ({
    getUserWorkouts: (id) => {
        dispatch(getUserWorkouts(id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);