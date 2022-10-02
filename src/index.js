import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import List from "./List";
ReactDOM.render(
  <div>
    {/* Has to start with an uppercase letter */}
    <Heading />
    <List />
  </div>,
  document.getElementById("root")
);
