import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import About from "../pages/About";
import { updateUserName } from "../actions/user"

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserName: data => {
      dispatch(updateUserName(data));
    },
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(About)
);
