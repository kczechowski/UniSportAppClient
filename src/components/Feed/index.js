import {connect} from "react-redux";
import Feed from './Feed'
import {getUserWorkouts, setPage} from "../../actions/feed.actions";

const mapStateToProps = (state) => ({
    user_id: state.authReducer.user_id,
    workouts: state.feedReducer.workouts,
    hasNext: state.feedReducer.hasNext,
    page: state.feedReducer.page
});

const mapDispatchToProps = (dispatch) => ({
    getUserWorkouts: (id, page) => {
        dispatch(getUserWorkouts(id, page))
    },
    setPage: (page) => {
        dispatch(setPage(page))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);