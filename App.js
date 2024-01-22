import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "h1 child1"),
    React.createElement("h2", {}, "h2 child1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "h1 child2"),
    React.createElement("h2", {}, "h2 child"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
