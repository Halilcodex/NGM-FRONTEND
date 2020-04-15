import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MainLayout from "./components/mainLayout/MainLayout";
import About from "./pages/about/About";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          component={(props) => (
            <MainLayout {...props}>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
            </MainLayout>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
