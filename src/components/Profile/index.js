import {connect} from "react-redux";
import Profile from './Profile'
import {getUserInfo} from "../../actions/profile.actions";

const mapStateToProps = (state) => ({
    user: state.profileReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
    getUserInfo: (id) => {
        dispatch(getUserInfo(id))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);