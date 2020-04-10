import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MainLayout from "./components/mainLayout/MainLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          component={(props) => (
            <MainLayout {...props}>
              <Route path="/" exact component={Home} />
            </MainLayout>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
