import React from "react";
import ReactDOM from "react-dom";
import Home from "./home";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Now News</h1>
      <Home />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
