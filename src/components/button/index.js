import React from "react";

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

export default Button;
