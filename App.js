import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <div id="title">
    <h1>Hello This is Functional Component From React</h1>
  </div>
);

const Heading = () => (
  <div id="heading">
    <Title />
    <h2 id="heading"> This is Component Composition</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
