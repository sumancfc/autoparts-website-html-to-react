import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./app/App";
import "animate.css/animate.min.css";
import "fontawesome-4.7/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
