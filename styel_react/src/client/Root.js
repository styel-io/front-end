import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import App from "../shared/App";

import "./Root.scss";
export default class Root extends Component {
  render() {
    return (
      <CookiesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CookiesProvider>
    );
  }
}
