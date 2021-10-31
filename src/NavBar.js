import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <h2>{this.props.pageTitle}</h2>
      </nav>
    );
  }
}

export default NavBar;
