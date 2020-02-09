import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header-footer/header";
import Footer from "./components/header-footer/footer";
import Home from "./components/home";

const Routes = () => (
  // <div>Hello</div>
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
