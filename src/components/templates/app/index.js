import React from "react";
import "../../../styles/App.css";

class AppTemplate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
        <div className="App">
            {this.props.children}
        </div>
    );
  }
}

export default AppTemplate;
