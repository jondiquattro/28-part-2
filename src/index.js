import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// function Message(props) {
//   props.text = "Hello World";
//   return <h1>{props.text}</h1>;
// }
// function
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Hello World" };
  }
  render() {
    return <div>{this.state.text}</div>;
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Message />
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
