import React from "react";
import Router from "./router";
import { CookiesProvider } from "react-cookie";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const App = () => {
  return (
    <CookiesProvider>
      <Router />
    </CookiesProvider>
  );
};

export default App;
