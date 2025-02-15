import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ShimmerLoader } from "react-shimmerify";

function App() {
  return (
    <ShimmerLoader isLoading={true}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    </ShimmerLoader>
  );
}

export default App;
