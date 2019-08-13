import React from "react";
import ReactDOM from "react-dom";
import DesignSection from "./Components/DesignSection";
import CodingSection from "./Components/CodingSection";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <DesignSection />
      <CodingSection />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
