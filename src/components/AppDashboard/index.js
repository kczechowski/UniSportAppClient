import {connect} from "react-redux";
import AppDashboard from './AppDashboard';
import {getLoggedInUserInfo} from "../../actions/user.actions";

const mapStateToProps = (state) => ({
    user_id: state.authReducer.user_id
});

const mapDispatchToProps = (dispatch) => ({
    getLoggedInUserInfo: (id) => {
        dispatch(getLoggedInUserInfo(id))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppDashboard);