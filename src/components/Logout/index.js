import {connect} from "react-redux";
import Logout from './Logout'
import {logout} from "../../actions/auth.actions";



const mapDispatchToProps = (dispatch) => ({
    logout: () => {
        dispatch(logout())
    }
});

export default connect(null, mapDispatchToProps)(Logout);