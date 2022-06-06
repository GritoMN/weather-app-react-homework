import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import Weather from "./weather";

import "./index.js";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
