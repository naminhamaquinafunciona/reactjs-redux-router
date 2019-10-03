import React from "react";

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
        <header className="App-header">
            {this.props.children}
        </header>
    );
  }
}

export default Header;
