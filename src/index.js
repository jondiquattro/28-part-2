import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class NameUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "Name"
    };
  }
  handleInput = e => {
    e.preventDefault();
    this.setState({ name: e.target.value });
    // console.log(e.target.value);
  };
  handleButtonClick = e => {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <div>{this.state.name}: </div>
        <div>{this.state.count}# of Updates: </div>
        <br />
        <input onChange={this.handleInput} />
        <br />
        <input type="submit" value="Submit" onClick={this.handleButtonClick} />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NameUpdate />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
