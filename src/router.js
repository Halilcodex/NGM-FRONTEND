import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MainLayout from "./components/mainLayout/MainLayout";
import About from "./pages/about/About";
import Members from "./pages/members/Members";
import Gallery from "./pages/gallery/Gallery";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route
          path="/"
          component={(props) => (
            <MainLayout {...props}>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
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
