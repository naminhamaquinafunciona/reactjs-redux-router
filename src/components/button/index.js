import React from "react";
import PropTypes from 'prop-types';

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <button type={this.props.type} onClick={this.props.handleChangeName}>{this.props.text}</button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  handleChangeName: PropTypes.func
};

export default Button;
