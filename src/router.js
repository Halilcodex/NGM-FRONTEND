import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Members from "./pages/members/Members";
import Gallery from "./pages/gallery/Gallery";
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
              <Route path="/Members" exact component={Members} />
              <Route path="/Gallery" exact component={Gallery} />
            </MainLayout>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
