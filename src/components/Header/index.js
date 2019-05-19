import {connect} from "react-redux";
import Header from './Header'

const mapStateToProps = (state) => ({
    user: state.userReducer.user
});

// const mapDispatchToProps = (dispatch) => ({
//     login: (username, password) => {
//         dispatch(login(username, password))
//     }
// })

export default connect(mapStateToProps, null)(Header);