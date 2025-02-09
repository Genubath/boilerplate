import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import SignUp from "./SignUp";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <SignUp />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
