import {connect} from "react-redux";
import Achievements from "./Achievements";

const mapStateToProps = (state) => ({
    user: state.userReducer.user
});

export default connect(mapStateToProps, null)(Achievements);