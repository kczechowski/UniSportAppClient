import {connect} from "react-redux";
import Header from './Header'
import {getLoggedInUserInfo} from "../../actions/user.actions";

const mapStateToProps = (state) => ({
    user: state.userReducer.user,
    user_id: state.authReducer.user_id
});

const mapDispatchToProps = (dispatch) => ({
    getLoggedInUserInfo: (id) => {
        dispatch(getLoggedInUserInfo(id))
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);