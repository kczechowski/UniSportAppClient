import {connect} from "react-redux";
import AdminTools from "./AdminTools";
import {getAllUsers} from "../../actions/user.actions";
import {deleteUser} from "../../actions/user.actions";

const mapStateToProps = (state) => ({
    token: state.authReducer.token,
    users: state.userReducer.users
});

const mapDispatchToProps = (dispatch) => ({
    getAllUsers: () => {
        dispatch(getAllUsers())
    },
    deleteUser: (id) => {
        dispatch(deleteUser(id))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminTools);