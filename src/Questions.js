import React from "react";
import "./Questions.css";

class Questions extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p className="questions">{this.props.questions}</p>
      </div>
    );
  }
}

export default Questions;
