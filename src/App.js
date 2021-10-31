import "./App.css";
import React from "react";
import NavBar from "../src/NavBar";
import Questions from "../src/Questions";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "Make a Choice",
      question: "Would you rather choose a framework over a library?",
      yesValue: 0,
      noValue: 0,
    };
  }

  handleYes = () => {
    this.setState((prevState) => ({ yesValue: prevState.yesValue + 1 }));
  };

  handleNo = () => {
    this.setState((prevState) => ({ noValue: prevState.noValue + 1 }));
  };

  render() {
    return (
      <div>
        <NavBar pageTitle={this.state.pageTitle} />
        <Questions questions={this.state.question} />
        <br />
        <button onClick={this.handleYes}>
          Yes <strong>{this.state.yesValue}</strong> Votes
        </button>
        <button onClick={this.handleNo}>
          No <strong>{this.state.noValue}</strong> Votes
        </button>

        <p>
          Total choice votes taken ={" "}
          <strong>{this.state.noValue + this.state.yesValue}</strong> votes
        </p>
        <p>More features coming soon...</p>
      </div>
    );
  }
}

export default App;
