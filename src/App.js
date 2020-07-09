import React from "react";
import "./styles.css";
import OutputScreen from "./Components/OutputScreen";
import KeyPad from "./Components/Keypad";

//export default function App() {

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      output: "123"
    };
  }

  handleKeyClick = targetBtn => {
    console.log(`value clicked ${targetBtn}`);
  };

  render() {
    return (
      <div className="App">
        <h1>Simple Calculator</h1>
        <OutputScreen output={this.state.output} />
        <KeyPad handleKeyClick={this.handleKeyClick} />
      </div>
    );
  }
}

export default App;
