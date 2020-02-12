import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/header-footer/header";
import Footer from "./components/header-footer/footer";
import Home from "./components/home";
import Teams from "./components/teams";
import Team from "./components/teams/team";

const Routes = () => (
  // <div>Hello</div>
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
    <Switch>
      <Route exact path="/teams" component={Teams} />
    </Switch>
    <Switch>
      <Route exact path="/teams/:name" component={Team} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
