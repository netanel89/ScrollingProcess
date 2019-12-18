import React from "react";
import ReactDOM from "react-dom";
import ScrollingProcess from "./ScrollingProcess";
import "./styles.css";

class App extends React.Component {
  renderA = () => {
    const style = {
      backgroundColor: "red",
      height: "100px",
      color: "white",
      fontSize: "2em"
    };
    return <div style={style}>STEP A</div>;
  };
  renderB = () => {
    const style = {
      backgroundColor: "blue",
      height: "100px",
      color: "white",
      fontSize: "2em"
    };
    return <div style={style}>STEP B</div>;
  };
  renderC = () => {
    const style = {
      backgroundColor: "gray",
      height: "100px",
      color: "white",
      fontSize: "2em"
    };
    return <div style={style}>STEP C</div>;
  };

  render() {
    return (
      <div className="App">
        <h1>Scrolling Process</h1>
        <ScrollingProcess>
          <ScrollingProcess.Step render={this.renderA} />
          <ScrollingProcess.Step render={this.renderB} />
          <ScrollingProcess.Step render={this.renderC} />
        </ScrollingProcess>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
